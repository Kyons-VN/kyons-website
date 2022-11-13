import Footer from "@components/Footer";
import { useState } from 'preact/hooks';

type Props = {
	l: any
}

export function ContactContent({l}:Props){

  const [sended, setSended] = useState(0);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log('run');
    console.log(type);
    console.log(email);
    console.log(message);
    console.log(name);
    
    const htmlMessage = message.replace(/\n/g,'<br />')
    // const url = `http://127.0.0.1:5001/kyonsvn/us-central1/smtpMail?type=${type}&email=${email}&name=${name}&message=${htmlMessage}`
    const url = `https://us-central1-kyonsvn.cloudfunctions.net/smtpMail?type=${type}&email=${email}&name=${name}&message=${htmlMessage}`
    
    // useEffect(() => {
      fetch(encodeURI(url))
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setSended(1);
        })
        .catch((err) => {
            setSended(-1);
        });
    // }, []);
  }
  
  return <div class='flex flex-col w-full h-screen bg-contact'>
    <div class='flex-1 flex flex-row gap-6 items-center justify-center'>
      <form onSubmit={handleSubmit} class='w-full md:w-[600px] flex flex-col gap-6'>
        <div class='w-full md:w-[600px] flex flex-col gap-6 items-center'>
          <h5 class='text-orange'>{l.contact.contact}</h5>
          <span class='text-center'>{l.contact.contactDesc}</span>
        </div>
        <div class='flex flex-col gap-2'>
          <select class='control' name="type" id="" required value={type} onChange={event => setType(event.target.value)}>
            <option value="" disabled selected hidden>{l.contact.youAre}</option>
            <option value="parents">{l.contact.parents}</option>
            <option value="teachers">{l.contact.teachers}</option>
            <option value="educators">{l.contact.educators}</option>
            <option value="investors">{l.contact.investors}</option>
            <option value="presses">{l.contact.presses}</option>
            <option value="potentialTeamates">{l.contact.potentialTeamates}</option>
          </select>
          <input name='email' type="text" placeholder={l.contact.email} required value={email} onChange={event => setEmail(event.target.value)} />
          <input name='name' type="text" placeholder={l.contact.name} value={name} onChange={event => setName(event.target.value)} />
          <textarea name='message' type="text" placeholder={l.contact.message} required value={message} onChange={event => setMessage(event.target.value)} rows="3" ></textarea>
        </div>
        <div class='w-full flex justify-center items-center'><button class='btn' type='submit'>{l.contact.send}</button></div>
      </form>
    </div>
    <Footer l={l} />
  </div>;
  }