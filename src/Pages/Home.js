import React from 'react';
import Banner from '../Assets/img/banner.png';
import UploadFile from '../Components/UploadFIle';
import SepuluhRibu from '../Assets/img/10.000.jpg';
import SepuluhRibuLama from '../Assets/img/10.000 depan lama.jpg';
import SeratusRibu from '../Assets/img/100.000 depan garis.jpg';
import DuapuluhRibuLama from '../Assets/img/20.000 depan lama.jpg';
import DuapuluhRibu from '../Assets/img/20.000 depan.jpg';
import LimaPuluhRibu from '../Assets/img/50.000 depan.jpg';
import './Home.css';

export default function Home() {
  const uang = [
    SepuluhRibu,
    SepuluhRibuLama,
    DuapuluhRibu,
    DuapuluhRibuLama,
    LimaPuluhRibu,
    SeratusRibu,
  ];

  return (
    <div className="home-container">
      <div className="home-parent">
        <div className="home-banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="home-upload">
          <div className="home-upload__title">Aplikasi Cek Keaslian Uang</div>
          <div className="home-example">
            {uang.map((el) => {
              return <img src={el} key={el} alt="img-uang" />;
            })}
          </div>
          <UploadFile />
        </div>
      </div>
    </div>
  );
}
