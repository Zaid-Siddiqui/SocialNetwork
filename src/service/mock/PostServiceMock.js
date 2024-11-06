import { getCurrentAccount } from "./AccountServiceMock";
import { getFormattedCurrentDate } from '../../utils/Utils';

let posts = [
  {
    "postId": 1,
    "date": "September 14, 2024",
    "description": "Material UI aims to provide building blocks for developers to create great user interfaces using the Material Design guidelines as a reference, which we strive to follow where practical.",
    "images": [
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
    ],
    "userId": 7689,
    "username": "anna.smith",
    "comments": [
      {
        "date": "September 14, 2024 14:02:00",
        "msg": "Great picture. Thank you!",
        "userId": 1234,
        "username": "steve.swanson"
      },
      {
        "date": "September 14, 2024 14:05:00",
        "msg": "Awesome look!",
        "userId": 1678,
        "username": "charlotte.morgan"
      }
    ],
    "likes": [
      {
        "userId": 1234,
        "username": "steve.swanson"
      },
      {
        "userId": 1678,
        "username": "charlotte.morgan"
      }
    ]
  },
  {
    "postId": 2,
    "date": "September 14, 2024",
    "description": "The library doesn't necessarily implement the exact specs of every component or feature—where official guidelines are incomplete or contradictory, maintainers apply common sense along with the latest standards in web development.",
    "images": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    ],
    "userId": 7979,
    "username": "john.doe",
    "comments": [
      {
        "date": "September 14, 2024 14:05:06",
        "msg": "Great picture. Thank you!",
        "userId": 1234,
        "username": "steve.swanson"
      },
      {
        "date": "September 14, 2024 14:10:45",
        "msg": "Awesome look!",
        "userId": 1678,
        "username": "charlotte.morgan"
      }
    ],
    "likes": [
      {
        "userId": 1234,
        "username": "steve.swanson"
      },
      {
        "userId": 1678,
        "username": "charlotte.morgan"
      }
    ]
  },
  {
    "postId": 3,
    "date": "September 12, 2024",
    "description": "A media query string ready to be used with most styling solutions, which matches screen widths starting from the screen size given by the breakpoint key (inclusive) and stopping at the screen size given by the next breakpoint key (exclusive)",
    "images": [
      "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
    ],
    "userId": 9876,
    "username": "rodney.swanson",
    "comments": [
      {
        "date": "September 14, 2024 14:05:06",
        "msg": "Thank you!",
        "userId": 1234,
        "username": "steve.swanson"
      }
    ],
    "likes": [
      {
        "userId": 1234,
        "username": "steve.swanson"
      }
    ]
  }
];

export function getNewsFeed() {
  return JSON.parse(JSON.stringify(posts));
}

export function addPostComment(postId, comment) {
  let post = posts.find((element) => element.postId == postId);
  if (post) {
    let currentUser = getCurrentAccount();
    post.comments.push({
      "date": getFormattedCurrentDate(),
      "msg": comment,
      "userId": currentUser.userId,
      "username": currentUser.username
    });
  }
}

export function addPostLike(postId) {
  let post = posts.find((element) => element.postId == postId);  
  let currentUser = getCurrentAccount();
  if (post) {
    post.likes.push({
      "userId": currentUser.userId,
      "username": currentUser.username
    });
  }
  console.log('Post', post);
}

export function removePostLike(postId) {
  let post = posts.find((element) => element.postId == postId);
  let currentUser = getCurrentAccount();
  if (post) {
    const index = post.likes.map(e => e.userId).indexOf(currentUser.userId);
    if (index > -1) {
      post.likes.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}

export function getUserPosts(userId) {
  return posts.filter((post) => post.userId == userId);
}

export function deletePost(postId) {
  const index = posts.map(e => e.postId).indexOf(postId);
  if (index > -1) {
    posts.splice(index, 1);
  }
}

export function createPost(post) {
  post.id = posts.length + 1;
  post.date = getFormattedCurrentDate();
  let currentUser = getCurrentAccount();
  post.userId = currentUser.userId;
  post.username = currentUser.username;
  post.comments = [];
  post.likes = [];

  posts.push(post);
}