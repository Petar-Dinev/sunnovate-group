import { Link } from 'react-router-dom';
import styles from './Certificates.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';

const certificates = {
    en: [
        { title: 'ISO 9001: Quality Management System', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 9001_2015.pdf' },
        { title: 'ISO 14001: Environmental Management System', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 14001_2015.pdf' },
        { title: 'ISO 45001: Occupational Health & Safety Management System', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 45001_2018.pdf' },
    ],
    it: [
        { title: 'ISO 9001: Sistema di gestione della qualità', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 9001_2015.pdf' },
        { title: 'ISO 14001: Sistema di gestione ambientale', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 14001_2015.pdf' },
        { title: 'ISO 45001: Sistema di gestione della salute e sicurezza sul lavoro', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-EN-ISO 45001_2018.pdf' },
    ],
    bg: [
        { title: 'ISO 9001: Система за управление на качеството', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-BG-ISO 9001_2015.pdf' },
        { title: 'ISO 14001: Система за управление на околната среда', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-BG-ISO 14001_2015.pdf' },
        { title: 'ISO 45001: Система за управление на здравето и безопасността при работа', file: '/certificates/Certificate-7461-SUNNOVATE_EOOD-BG-ISO 45001_2018.pdf' },
    ],

};


export default function Certificates() {
    const { language } = useContext(LanguageContext);

    if (language == 'bg') {
        return (
            <section className={styles.certificates}>
                <h2>Нашите Сертификати</h2>
                <ul className={styles.certList}>
                    {certificates.bg.map((cert, index) => (
                        <li key={index}>
                            <Link to={cert.file} target="_blank" rel="noopener noreferrer">
                                📄 {cert.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }

    if (language == 'it') {
        return (
            <section className={styles.certificates}>
                <h2>I nostri certificati</h2>
                <ul className={styles.certList}>
                    {certificates.it.map((cert, index) => (
                        <li key={index}>
                            <Link to={cert.file} target="_blank" rel="noopener noreferrer">
                                📄 {cert.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }

    return (
        <section className={styles.certificates}>
            <h2>Our Certificates</h2>
            <ul className={styles.certList}>
                {certificates.en.map((cert, index) => (
                    <li key={index}>
                        <Link to={cert.file} target="_blank" rel="noopener noreferrer">
                            📄 {cert.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
