package com.example.dachuang.Service;

import com.example.dachuang.EX.ServiceException;
import com.example.dachuang.Entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserServiceTests {
    @Autowired
    private UserService userService;
    @Test
    public void reg() {
        try {
            User user = new User();
            user.setUsername("service");
            user.setPassword("1234");
            user.setGender(0);
            user.setPhone("13800138003");
            user.setEmail("service@163.com");
            user.setAvatar("avatar");
            userService.reg(user);
            System.err.println("OK.");
        } catch (ServiceException e) {
            System.err.println(e.getClass().getName());
        }
    }
    @Test
    public void login(){
        try{
            String username="digests";
            String password="0000";
            User result=userService.login(username,password);
            System.err.println("OK");
            System.err.println(result);

        }
        catch(ServiceException e){
            System.err.println(e.getClass().getName());
            System.err.println(e.getMessage());
        }
    }
    @Test
    public void changePassword(){
        try {
            Integer uid = 3;
            String username = "KFClpy";
            String oldPassword = "123456";
            String newPassword = "0000";
            userService.changePassword( username, oldPassword, newPassword);
            System.err.println("Ok");
        }
        catch(ServiceException e){
            System.err.println(e.getClass().getName());
            System.err.println(e.getMessage());
        }
    }
}


