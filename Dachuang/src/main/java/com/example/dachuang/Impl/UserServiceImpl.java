package com.example.dachuang.Impl;

import com.alibaba.fastjson.JSONObject;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.dachuang.Dao.UserMapper;
import com.example.dachuang.EX.*;
import com.example.dachuang.Entity.FileUpLoad;
import com.example.dachuang.Entity.User;
import com.example.dachuang.Service.UserService;
import com.example.dachuang.Util.RedisUtils;
import com.example.dachuang.Util.TokenUtils;
import com.example.dachuang.Util.UploadFileTool;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    RedisUtils redisUtils;
    @Autowired
    TokenUtils tokenUtils;
    @Autowired
    UserMapper userMapper;
    @Autowired
    UploadFileTool uploadFileTool;
    @Override
    public void reg(User user)
    {
        JSONObject json=new JSONObject();
        System.err.println("UserServiceImpl.reg()");
        String username = user.getUsername();
        User result=userMapper.findByUsername(username);
        if(result!=null){
            throw new UsernameDuplicateException();

        }
        Date now=new Date();
        String salt= UUID.randomUUID().toString();
        user.setSalt(salt);
        String md5Password=getMd5Password(user.getPassword(),salt);
        user.setPassword(md5Password);
        user.setIsDelete(0);
        user.setCreatedUser(username);
        user.setCreatedTime(now);
        user.setModifiedUser(username);
        user.setModifiedTime(now);
        Integer rows=userMapper.insert(user);
        if(rows!=1)
        {
            throw new InsertException();
        }

    }
    @Override
    public User login(String username,String password)
    {
        System.err.println("UserServiceImpl.login()");
        User result= userMapper.findByUsername(username);
        if(result==null)
        {
            throw new UsernotfoundException("?????????????????????????????????!");
        }
        if(result.getIsDelete()==1)
        {
            throw new UsernotfoundException("??????????????????????????????????????????");
        }
        String salt=result.getSalt();
        String md5Password=getMd5Password(password,salt);
        if(!md5Password.equals(result.getPassword()))
        {
            throw new PasswordNotMatchException("???????????????????????????");
        }
        User user=new User();
        user.setUid(result.getUid());
        user.setUsername(result.getUsername());
        user.setAvatar(result.getAvatar());
        user.setPassword(result.getPassword());
        return user;
    }
    private String getMd5Password(String password,String salt)
    {
        String result=salt+password+salt;
        for(int i=0;i<3;i++)
        {
            result= DigestUtils.md5Hex(result);

        }
        System.err.println("\tpassword=" + password);
        System.err.println("\tsalt=" + salt);
        System.err.println("\tmd5Password=" + result);
        return result;
    }
    @Override
    public void changePassword(String username,String oldPassword,String newPassword)
    {
        System.err.println("UserServiceImpl.changePassword()");
        User result=userMapper.findByUsername(username);
        if(result==null)
        {
            throw new UsernotfoundException("???????????????????????????????????????????????????");
        }
        if(result.getIsDelete()==1)
        {
            throw new UsernotfoundException("???????????????????????????????????????");
        }
        String salt=result.getSalt();
        String oldMd5password=getMd5Password(oldPassword,salt);
        if(!oldMd5password.equals(result.getPassword()))
        {
            throw new PasswordNotMatchException("??????????????????,???????????????");
        }
        System.err.println("\t??????????????????????????????");
        String newMd5password=getMd5Password(newPassword,salt);
        String token=tokenUtils.getToken();
        redisUtils.del(new String[]{token});
        String newToken=JWT.create().withAudience(username)
                .withIssuer("KKKFFFCCC")
                .sign(Algorithm.HMAC256(newMd5password));
        redisUtils.set(newToken,username,30, TimeUnit.MINUTES);
        Integer rows=userMapper.updatePasswordByUid(newMd5password,username,new Date());
        if(rows!=1)
        {
            throw new UpdateException("??????????????????????????????????????????????????????!");
        }
    }
    @Value ("${uploadFile.path}")
    String path;
    @Override
    public void updateAvatar(String username, MultipartFile file)
    {
        User user= userMapper.findByUsername(username);
        FileUpLoad fileUpLoad= uploadFileTool.upload(username,file.getOriginalFilename(),file);
        String filePath=path+user.getAvatar();
        File preAvatar=new File(filePath);
        if(preAvatar.isFile()&&preAvatar.exists())
        {
            boolean res=preAvatar.delete();
            System.out.println("???????????????"+(res?"??????":"??????"));
        }
        Integer rows=userMapper.updateAvatarByUid(fileUpLoad.getType()+ File.separator+fileUpLoad.getFilename(),username,new Date());
        if(rows!=1)
        {
            throw new UpdateException("??????????????????????????????????????????????????????");
        }
    }
    @Override
    public void updateInfo(String username,String nickname,String phone,Integer gender,Integer identity,String email)
    {
        Date date=new Date();
        Integer rows=userMapper.updateAllByUsername(nickname,phone,gender,identity,email,username,date);
        if(rows!=1)
        {
            throw new UpdateException("??????????????????????????????????????????????????????");
        }
    }
    @Override
    public JSONObject getUserInfo(String username)
    {
        JSONObject obj=new JSONObject();
        User user= userMapper.findByUsername(username);
        obj.put("avatar",user.getAvatar()!=null?user.getAvatar():"/image/image.png");
        obj.put("name",user.getNickname()!=null?user.getNickname():"??????");
        obj.put("tel",user.getPhone()!=null?user.getPhone():"??????");
        obj.put("sex",user.getGender()!=null?user.getGender():2);
        obj.put("other",user.getIdentity()!=null?user.getIdentity():3);
        obj.put("email",user.getEmail()!=null?user.getEmail():"??????");
        return obj;
    }
}
