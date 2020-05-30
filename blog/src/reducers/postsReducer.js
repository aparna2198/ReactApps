export default (state = [], action) => {
    // postsreducer is suppose to maintain the list we have fetched from json api 
    switch (action.type)
    {
        case "FETCH_POST":
            return action.payload;
        default:
            return state;
    }
};