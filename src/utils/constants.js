export const GOOGLE_API_KEY = "AIzaSyClFPiAvfnWynHCFZfrvNigd5TslqJdINQ";
export const LIVE_CHAT_COUNT = 100;
export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;
export const CHANNEL_INFO="https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=";
export const COMMENTS_LIST= "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+GOOGLE_API_KEY+"&videoId=";

export const YOUTUBE_RELATED_VIDEO= "https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=25&key="+GOOGLE_API_KEY +"&channelId="

export const YOUTUBE_SEARCH_SUGGESTIONS = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";