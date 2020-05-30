export default (state = [], action) => {
    switch (action.type)
    {
        case "FETCH_USER":
            return [...state, action.payload];
        // anytime that we return some data from a reducer we always have to return a nw array  or new object
        // or a diff value string or diff number if we expect a redux to realize 
        // that we makde a change to the data inside of our application
            // if we retrun the exact same object or array redux as that very simple comparison
            // where it just checks to see if that is the same objecct or araray in memory
        //  and if it redux says no data has changed and it doe not update the rest of your application
        // for eg numbers =[1,2,3] thats it this array is done you cant mutate this array 
                //   when you do numbers===[1,2,3] it will return false because it checks the memory location
        // return [...state, action.payload]; therefor here we creating new memrory location for redux to notice the change
        default:
            return state;
    }
}