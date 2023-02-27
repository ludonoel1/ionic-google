export default function generateEmail(){
    var random_number = Math.floor(Math.random() * 1000000000);
    var email = `user_${random_number}@zumba`
    return email;
  }
