package com.cody.relationships.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cody.relationships.models.License;
import com.cody.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;
	
	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
	}
	
	public List<License> allLicenses(){
		return licenseRepository.findAll();
	}
	
	public License createLicense(License license) {
		return licenseRepository.save(license);
	}
	
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		}else {
			return null;
		}
	}
	
	public License updateLicense(License license) {
		return licenseRepository.save(license);
	}
	
	public void deleteLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			licenseRepository.deleteById(id);
		}
	}

}