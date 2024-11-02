import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './ContactInfo.css';

export default function ContactInfo() {
    return (
        <div className='contact_info'>
            <h3>Epic Media Edit Suite</h3>
            <p>Kurisingal Building,
                Payward Complex, XIII/85, C6,
                Arakuzha Rd, P.O Junction,
                Thottumkalpeedika,
                Muvattupuzha,
                Kerala 686661</p>
                <div className="social-icons">
                <a href="https://www.instagram.com/epicmedia__/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FontAwesomeIcon icon={faInstagram} /> Follow
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <FontAwesomeIcon icon={faWhatsapp} /> Message
                </a>
            </div>
        </div>

    );
}
