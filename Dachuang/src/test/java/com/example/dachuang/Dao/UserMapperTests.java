package com.example.dachuang.Dao;

import com.example.dachuang.Entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
public class UserMapperTests {

    @Autowired
    private UserMapper mapper;

    @Test
    public void insert() {
        User user = new User();
        user.setUsername("project");
        user.setPassword("1234");
        user.setGender(0);
        user.setSalt("salt");
        user.setPhone("13800138002");
        user.setEmail("project@163.com");
        user.setAvatar("avatar");
        user.setIsDelete(0);
        user.setCreatedUser("系统管理员");
        user.setCreatedTime(new Date());
        user.setModifiedUser("超级管理员");
        user.setModifiedTime(new Date());
        user.setNickname("梁天宇");
        user.setIdentity(1);
        Integer rows = mapper.insert(user);
        System.err.println("rows=" + rows);
        System.err.println(user);
    }

    @Test
    public void findByUsername() {
        String username = "project";
        User result = mapper.findByUsername(username);
        System.err.println(result);
    }
    @Test
    public void updatePassword() {
        Integer uid=1;
        String password="88888888";
        String modifiedUser="系统管理员";
        Date ModifiedTime=new Date();
        Integer rows=mapper.updatePasswordByUid(password,modifiedUser,ModifiedTime);
        System.err.println("rows="+rows);

    }
    @Test
    public void findByUid()
    {
        Integer uid=1;
        User result=mapper.findByUid(uid);
        System.err.println(result);
    }
    @Test
    public void updateUserALL()
    {
        String nickname="孟庆鑫爹";
        String phone="13304972282";
        Integer gender=1;
        Integer identity=1;
        String email="2291897613@qq.com";
        String username="lty123456";
        Date date=new Date();
        Integer rows= mapper.updateAllByUsername(nickname,phone,gender,identity,email,username,date);
        System.out.println("信息更改"+rows+"行");
    }

}

