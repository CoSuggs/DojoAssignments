package com.cody.omikuji.models;

public class OmikujiModel {
	private Integer num;
	private String cityName;
	private String realName;
	private String hobby;
	private String livingThing;
	private String comment;

	public OmikujiModel(Integer num, String cityName, String realName, String hobby, String livingThing,
			String comment) {
		this.num = num;
		this.cityName = cityName;
		this.realName = realName;
		this.hobby = hobby;
		this.livingThing = livingThing;
		this.comment = comment;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getHobby() {
		return hobby;
	}

	public void setHobby(String hobby) {
		this.hobby = hobby;
	}

	public String getLivingThing() {
		return livingThing;
	}

	public void setLivingThing(String livingThing) {
		this.livingThing = livingThing;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}
