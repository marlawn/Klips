import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

const posts = [
  { id: '1', user: 'Alice', content: 'Just got back from an amazing trip to the mountains!' },
  { id: '2', user: 'Bob', content: 'Loving the new season of my favorite show!' },
  { id: '3', user: 'Charlie', content: 'Had a great time catching up with old friends today.' },
  { id: '4', user: 'Diana', content: 'Finally finished reading that book I was talking about.' },
  { id: '5', user: 'Eve', content: 'Started a new workout routine today, feeling great!' },
  { id: '6', user: 'Frank', content: 'Cooked a delicious meal for dinner tonight.' },
  { id: '7', user: 'Grace', content: 'Enjoying the sunny weather at the beach!' },
  { id: '8', user: 'Hank', content: 'Spent the day volunteering at the local shelter.' },
  { id: '9', user: 'Ivy', content: 'Working on a new project, excited to see how it turns out.' },
  { id: '10', user: 'Jack', content: 'Watched an interesting documentary on history today.' },
  { id: '11', user: 'Kara', content: 'Had a productive day at work, accomplished a lot!' },
  { id: '12', user: 'Leo', content: 'Went for a long hike in the forest, so refreshing.' },
  { id: '13', user: 'Mia', content: 'Attended a live concert, the music was amazing!' },
  { id: '14', user: 'Nate', content: 'Spent the evening painting, very relaxing.' },
  { id: '15', user: 'Olivia', content: 'Just finished a yoga session, feeling zen.' },
  { id: '16', user: 'Paul', content: 'Baked some cookies, they turned out great!' },
  { id: '17', user: 'Quinn', content: 'Caught up on some much-needed sleep.' },
  { id: '18', user: 'Rachel', content: 'Had a fun day at the amusement park.' },
  { id: '19', user: 'Sam', content: 'Watched a beautiful sunset this evening.' },
  { id: '20', user: 'Tina', content: 'Started learning a new language, it\'s challenging but fun!' },
  { id: '21', user: 'Uma', content: 'Spent the day gardening, it\'s so peaceful.' },
  { id: '22', user: 'Victor', content: 'Played some board games with family.' },
  { id: '23', user: 'Wendy', content: 'Went to a farmer\'s market, bought some fresh produce.' },
  { id: '24', user: 'Xander', content: 'Listened to a new podcast episode, very informative.' },
  { id: '25', user: 'Yara', content: 'Had a lovely brunch with friends.' },
  { id: '26', user: 'Zane', content: 'Took a long bike ride around the city.' },
  { id: '27', user: 'Amelia', content: 'Started watching a new TV series, it\'s gripping!' },
  { id: '28', user: 'Brian', content: 'Spent the day at the zoo, saw some amazing animals.' },
  { id: '29', user: 'Catherine', content: 'Had a relaxing spa day, much needed.' },
  { id: '30', user: 'Daniel', content: 'Went fishing with my grandfather, a great bonding time.' },
  { id: '31', user: 'Elena', content: 'Tried out a new recipe, it was a hit!' },
  { id: '32', user: 'Felix', content: 'Attended a virtual conference, learned a lot.' },
  { id: '33', user: 'Georgia', content: 'Had a movie marathon with friends.' },
  { id: '34', user: 'Harry', content: 'Spent the afternoon playing soccer.' },
  { id: '35', user: 'Isabella', content: 'Went to a pottery class, made my first pot!' },
  { id: '36', user: 'James', content: 'Did a deep clean of my house, feels so fresh now.' },
  { id: '37', user: 'Kelly', content: 'Enjoyed a quiet day reading my favorite book.' },
  { id: '38', user: 'Liam', content: 'Went camping over the weekend, it was an adventure.' },
  { id: '39', user: 'Megan', content: 'Started a new hobby: knitting. It\'s relaxing!' },
  { id: '40', user: 'Noah', content: 'Spent the day at a theme park, had so much fun.' },
  { id: '41', user: 'Olga', content: 'Went on a photography walk, captured some beautiful shots.' },
  { id: '42', user: 'Peter', content: 'Had a productive brainstorming session for a new project.' },
  { id: '43', user: 'Quincy', content: 'Listened to a great new album, can\'t stop playing it.' },
  { id: '44', user: 'Rose', content: 'Tried out a new cafe, the coffee was amazing.' },
  { id: '45', user: 'Steve', content: 'Had a fun game night with friends.' },
  { id: '46', user: 'Tara', content: 'Went for a swim at the local pool, felt refreshing.' },
  { id: '47', user: 'Ursula', content: 'Spent the evening stargazing, saw some beautiful constellations.' },
  { id: '48', user: 'Vince', content: 'Had a great workout session at the gym.' },
  { id: '49', user: 'Willow', content: 'Spent the afternoon baking bread, it smells so good!' },
  { id: '50', user: 'Xenia', content: 'Went on a scenic drive, the views were stunning.' },
];

const PostView = ({user, content}) => (
  <View style= {{ flexDirection: "row", borderWidth: 10, borderBottomWidth: 0, borderColor: "gray"}}>
    <View style = {{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize: 15}}>PROFILE PICTURE</Text>
    </View>
    <View style={{ flex: 4, flexDirection:"column", backgroundColor: "lightgray", padding: 10 }}>
      <Text style ={{fontWeight: "bold", fontSize: 18}}>{user}</Text>
      <Text>{content}</Text>
   </View>
  </View>
)

export default function Index() {
  return (
    <ScrollView>
      {posts.map(post => (
              <PostView
                key={post.id}
                user={post.user}
                content={post.content}
              />
              ))}
      <Link href="/details">View details</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }
});