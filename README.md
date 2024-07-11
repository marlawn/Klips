# Klips - Share/View Friends' Clips

Developing a social media application in **React Native** and **Expo** where users can view, like, share clips of video games.

Utilizing microservices architecture for the backend consisting of:
* User authentication
  * User registration and login
  * Token generation and validation
  * Manage user profile information (name, bio, avatar, etc.)
* Media processing
  * Handle media uploads from users
  * Store video metadata (title, description, tags)
  * Integrate with AWS S3 for storing video files
* Interaction Service
  * Handle likes and comments
