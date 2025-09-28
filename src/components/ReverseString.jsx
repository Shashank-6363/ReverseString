function ReverseString() {
    // Reverse a String 
    const NewString = 'Hello, this is shekhar from Ayodhya'
    return(
        <>
        <p>{NewString}</p>
        <p>{NewString.split('').reverse().join('')}</p>
        </>

    );
}
export default ReverseString;