package com.ssafy.beconofstock.authentication.provider;

import lombok.RequiredArgsConstructor;

import java.util.Map;

@RequiredArgsConstructor
public class KakaoOAuthUserInfo implements OAuthUserInfo{
    private Map<String, Object> attributes;
    private Map<String, Object> attributesAccount;
    private Map<String, Object> attributesProfile;

    public KakaoOAuthUserInfo(Map<String ,Object> attributes){
        this.attributes = attributes;
        this.attributesAccount = (Map<String, Object>) attributes.get("kakao_account");
        this.attributesProfile = (Map<String, Object>) attributesAccount.get("profile");
    }

    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getName() {
        return attributesProfile.get("nickname").toString() ;
    }

    @Override
    public String getProfileImg() {
        if(attributesProfile.get("thumbnail_image_url")!=null){
            return attributesProfile.get("thumbnail_image_url").toString() ;
        }
        return "";
    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.attributes;
    }
}
