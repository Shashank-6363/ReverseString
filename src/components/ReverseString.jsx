function ReverseString() {
    // Reverse a String 
    const NewString = 'Hello'
    return(
        <>
        <p>{NewString}</p>
        <p>{NewString.split('').reverse().join('')}</p>
        </>

    );
}
export default ReverseString;