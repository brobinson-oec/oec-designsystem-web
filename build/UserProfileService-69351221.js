class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "John McDonald",
      orgName: "Toyota of Richfield",
      profilePictureUri: ""
    });
  }
}

export { UserProfileService as U };
