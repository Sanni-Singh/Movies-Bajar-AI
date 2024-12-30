export const Validation = (email,passward)=>{
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswardValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passward);

    if(!isEmailValid) return "Your Email Is Not Vaild ...!";
    if(!isPasswardValid) return "Your Passward Is Not Correct....!"
    return null;
}