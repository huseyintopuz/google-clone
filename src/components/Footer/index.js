import React from 'react';
import Country from '../Country';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Country />
            <div className='footer-bottom'>
                <div className='footer-left'>
                    <a href="">Hakkında</a>
                    <a href="">Reklam</a>
                    <a href="">İşletme</a>
                    <a href="">Arama nasıl çalışır?</a>
                </div>
                <div className='footer-center'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="leaf" />
                    <span>2007'den bu yana karbon nötr</span>
                </div>
                <div className='footer-right'>
                    <a href="">Gizlilik</a>
                    <a href="">Şartlar</a>
                    <div className='settings'>Ayarlar</div>
                </div>
            </div>
        </div>
    )
}

export default Footer