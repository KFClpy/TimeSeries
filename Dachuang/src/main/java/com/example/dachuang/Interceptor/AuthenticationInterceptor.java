package com.example.dachuang.Interceptor;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import com.example.dachuang.Util.RedisUtils;
import com.example.dachuang.Util.TokenUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.concurrent.TimeUnit;

@Component
public class AuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    TokenUtils tokenUtils;
    @Autowired
    private RedisUtils redisUtils;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object)throws Exception {
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }
        String token = request.getHeader("token");
        if(token !=null){
            if(redisUtils.hasKey(token)){
                redisUtils.expire(token,30, TimeUnit.MINUTES);
                return true;
            }
        }
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=utf-8");
        try{
            JSONObject obj=new JSONObject();
            obj.put("success",false);
            obj.put("msg","登录信息验证失败");
            System.err.println("登录信息验证失败");
            response.getWriter().write(new ObjectMapper().writeValueAsString(obj));
        }catch(Exception e)
        {
            e.printStackTrace();
            response.sendError(500);
            return false;
        }
        return false;
    }
}
