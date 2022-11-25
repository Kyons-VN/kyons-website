import Footer from '@components/Footer';
import { useState } from 'preact/hooks';

type Props = {
  l: any;
};

export function ContactContent({ l }: Props) {
  const [sended, setSended] = useState(0);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const htmlMessage = message.replace(/\n/g, '<br />');
    // const url = `http://127.0.0.1:5001/kyonsvn/us-central1/smtpMail?type=${type}&email=${email}&name=${name}&message=${htmlMessage}`
    const url = `https://us-central1-kyonsvn.cloudfunctions.net/smtpMail?type=${type}&email=${email}&name=${name}&message=${htmlMessage}`;

    fetch(encodeURI(url))
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSended(data.status == 200 ? 1 : -1);
      })
      .catch((err) => {
        setSended(-1);
      });
  }

  return (
    <div class='flex flex-col w-full h-screen'>
      <div id='contact' class='absolute mt-[-78px]'></div>
      <div class='flex-1 flex flex-col gap-6 items-center justify-center p-6 bg-contact'>
        <div class='w-full flex flex-col gap-6 items-center'>
          <h5 class='text-orange'>{l.contact.contact}</h5>
          <span class='text-center'>{l.contact.contactDesc}</span>
        </div>
        <form onSubmit={handleSubmit} class='w-full md:w-[600px] flex flex-col gap-6'>
          <div class='flex flex-col gap-2'>
            <select
              class='control'
              name='type'
              id=''
              required
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value='' disabled selected hidden>
                {l.contact.youAre}
              </option>
              <option value={l.contact.parents}>{l.contact.parents}</option>
              <option value={l.contact.teachers}>{l.contact.teachers}</option>
              <option value={l.contact.educators}>{l.contact.educators}</option>
              <option value={l.contact.investors}>{l.contact.investors}</option>
              <option value={l.contact.presses}>{l.contact.presses}</option>
              <option value={l.contact.potentialTeamates}>{l.contact.potentialTeamates}</option>
            </select>
            <input
              name='email'
              type='text'
              placeholder={l.contact.email}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              name='name'
              type='text'
              placeholder={l.contact.name}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <textarea
              name='message'
              type='text'
              placeholder={l.contact.message}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows='3'
            ></textarea>
          </div>
          <div
            className={
              (sended != 0 ? 'flex' : 'hidden') +
              (sended == 1 ? ' text-green-500' : '') +
              (sended == -1 ? ' text-red-0' : '')
            }
          >
            {sended == 1 ? l.contact.success : l.contact.error}
          </div>
          <div class='w-full flex justify-center items-center'>
            <button class='btn' type='submit'>
              {l.contact.send}
            </button>
          </div>
        </form>
      </div>
      <Footer l={l} />
    </div>
  );
}
