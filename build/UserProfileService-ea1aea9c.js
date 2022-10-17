class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "John McDonald",
      orgName: "Toyota of Richfield",
      profilePictureUri: ""
    });
  }
  getUserById(uid) {
    return Promise.resolve(USERS.filter(function (x) {
      return x.id === uid;
    })[0]);
  }
}
const USERS = [
  {
    id: "abc123",
    displayName: "Joe McDonald",
    orgName: "Toyota of Richfield",
    profilePictureUri: ""
  },
  {
    id: "abc456",
    displayName: "Ivan Terrible",
    orgName: "Toyota of Richfield",
    profilePictureUri: ""
  },
  {
    id: "xyz123",
    displayName: "Allan Street",
    orgName: "Toyota of Richfield",
    profilePictureUri: ""
  },
  {
    id: "xyz456",
    displayName: "Andrew Cobol",
    orgName: "Toyota of Richfield",
    profilePictureUri: ""
  }
];

export { UserProfileService as U };
