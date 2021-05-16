import React, { useState, useEffect } from 'react';

import Page from './Page';
import { FlyingMailIcon } from '../components/Icons';

const Contact = () => {

    const [ fetching, setFetching ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ error, setError ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const submitFormHandler = async e => {
        if(fetching) return;
        try {
            e.preventDefault();
            setFetching(true);
            const send = await fetch('https://formspree.io/f/meqvazbv', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const json = await send.json();

            if(json.ok) {
                setSuccess(true);
            } else {
                setError(true);
            }
            setFetching(false);
        } catch {
            setError(true);
        }
    }

    const resetInputs = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    useEffect(() => {
        if(success || error) {
            setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 5000);
            success && resetInputs();
        }
    }, [success,error]);

    return (
        <Page className='page__contact' id='contact' title='Contact' subtitle="If you have any questions, or want to hire me<br /> don't hesitate to send message.">
            <div className="contact__form--container">
                <div className="contact__form--icon">
                    <FlyingMailIcon />
                </div>
                <form className="contact__form" onSubmit={submitFormHandler}>
                    <div className="contact__form--group">
                        <input type="text" name="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="contact__form--group">
                        <input type="email" name="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="contact__form--group">
                        <input type="text" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                    <div className="contact__form--group">
                        <textarea name="message" rows="10" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div className="contact__form--submit">
                        <button type="submit">
                            {!fetching ? 'Send Message' : 'Sending...'}
                        </button>
                    </div>
                </form>
                {error && <p className="contact__form--message error">Error sending message. Please try again. <span class="block">If the problem is still there, You can contact me at <span class="email">kuzma031@yahoo.com</span></span></p> }
                {success && <p className="contact__form--message success">Thanks for message. I'll respond as soon as possible!</p> }
            </div>
        </Page>
    )
}

export default Contact;