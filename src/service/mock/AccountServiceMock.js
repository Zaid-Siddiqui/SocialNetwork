
let currentAccount = {
  userId: 9876,
  username: "rodney.swanson",
  firstName: 'Rodney',
  lastName: 'Swanson',
  avatar: '',
  description: 'My account is dedicated to my personal life',
  following: [
    {
      "userId": 1678,
      "username": "charlotte.morgan"
    },
    {
      "userId": 7979,
      "username": "john.doe"
    }
  ],
  followersCount: 368
};

let accounts = [
  {
    userId: 7689,
    username: "anna.smith",
    firstName: 'Anna',
    lastName: 'Smith',
    avatar: '',
    description: 'In my account I publish reviews of films and other things',
    following: [],
    followersCount: 2000,
    status: 'Active'
  },
  {
    userId: 1234,
    username: "steve.swanson",
    firstName: 'Steve',
    lastName: 'Swanson',
    avatar: '',
    description: '',
    following: [],
    followersCount: 7,
    status: 'Active'
  },
  {
    userId: 1678,
    username: "charlotte.morgan",
    firstName: 'Charlotte',
    lastName: 'Morgan',
    avatar: '',
    description: '',
    following: [],
    followersCount: 887,
    status: 'Active'
  },
  {
    userId: 7979,
    username: "john.doe",
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
    description: '',
    following: [],
    followersCount: 456,
    status: 'Active'
  }
];

export function getCurrentAccount() {
  return JSON.parse(JSON.stringify(currentAccount));
}

export function follow(userId) {
  let account = accounts.find(x => x.userId == userId);
  if (account) {
    currentAccount.following.push({
      "userId": userId,
      "username": account.username
    });
  }
}

export function unfollow(userId) {
  const index = currentAccount.following.map(e => e.userId).indexOf(userId);
    if (index > -1) {
      currentAccount.following.splice(index, 1); // 2nd parameter means remove one item only
    }
}

export function getProfile(userId) {
  if (currentAccount.userId == userId) return getCurrentAccount();
  let account = accounts.find((element) => element.userId == userId);
  return JSON.parse(JSON.stringify(account));
}

export function getSuggestedAccounts() {
  let followingUserIds = currentAccount.following.map(e => e.userId);
  return accounts.filter(account => followingUserIds.indexOf(account.userId) < 0);
}

export function updateProfile(profile) {
  currentAccount.firstName = profile.firstName;
  currentAccount.lastName = profile.lastName;
  currentAccount.description = profile.description;
}

export function updateProfileAvatar(src) {
  currentAccount.avatar = src;
}

export function searchAccounts(username) {
  return accounts.filter(account => account.username.toLowerCase().startsWith(username.toLowerCase())); 
}