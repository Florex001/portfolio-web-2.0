import React, { useState } from 'react'
import "./kapcsolat.css"
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from '../assets/kapcsolat.json'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ScrollAnimation from './ScrollAnimation';

function Kapcsolat() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            toast.error("Minden mezőt ki kell tölteni!");
            return;
        }else {
            emailjs
                .send(
                    "service_89l1jzn",
                    "template_hr9cmp9",
                    {
                        form_name: form.name,
                        to_name: "Balogh Dávid",
                        from_email: form.email,
                        to_email: "balogh.david.web@gmail.com",
                        message: form.message,
                    },
                    "a6LlP-P12DlTjM9cv"
                )
                .then(
                    () => {
                        toast.success("Sikeres email küldés! Hamarosan válaszolok!")

                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    },
                    (error) => {
                        toast.error("Hiba történt az üzenetküldéskor! Próbálja újra.")
                    }
                );
        }
    };

    return (
        <div className="kapcsolat-container" id='kapcsolat'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="kapcsolat-content">
                <div className="kapcsolat-text">
                    <p>Kapcsolat</p>
                    <h2>írjon nekem!</h2>
                </div>
                <ScrollAnimation>
                <div className="kapcsolat-box">
                    <div className="kapcsolat-left">
                        <div className="kapcsolat-elerhetoseg">
                            <h3>Elérhetőségek</h3>
                            <div className="social">
                                <a href="https://github.com/Florex001" target="_blank" rel="noopener noreferrer">
                                    <FaGithubSquare className='github'/>
                                </a>
                                <a href="https://www.linkedin.com/in/d%C3%A1vid-balogh-646438239/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='linkedin'/>
                                </a>
                            </div>
                        </div>
                        <div className="email">
                            <p>Email</p>
                            <p>balogh.david.web@gmail.com</p>
                        </div>
                        <div className="tel">
                            <p>Telefon</p>
                            <p>+36709312755</p>
                        </div>
                        <div className="email-anim-container">
                            <div className="email-anim">
                                <Lottie animationData={animationData} />
                            </div>
                        </div>
                    </div>
                    <div className="kapcsolat-right">
                        <form ref={form} onSubmit={handleSubmit}>
                                <div className="kapcsolat-message">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label for="name">Teljes neve</label>
                                </div>
                                <div className="kapcsolat-message">
                                    <input
                                        type="text"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label for="email">Email címe</label>
                                </div>
                                <div className="kapcsolat-message">
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                            <label for="message">Üzenet</label>
                                </div>
                                <div className="kapcsolat-button">
                                    <button type='submit'>Küldés</button>
                                </div>
                        </form>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Kapcsolat