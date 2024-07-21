import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/tentang.css';
import logo from '../assets/images/logo.png';

const Tentang = () => {
  return (
    <div className="tentang-container">
      {/* ============ hero section start ============ */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <div className="hero-content">
                <img src={logo} alt="Logo Perusahaan" className="company-logo" />
                <h1 className="hero-title">Tentang Kami</h1>
                <p className="hero-description">
                  Voyago Travel adalah agen perjalanan terkemuka yang berkomitmen untuk memberikan pengalaman perjalanan terbaik kepada pelanggan. Kami menyediakan layanan berkualitas tinggi dan paket perjalanan yang memenuhi kebutuhan liburan.
                </p>
              </div>
            </Col>
            <Col lg="6">
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ hero section end ============ */}

      {/* ============ visi dan misi section start ============ */}
      <section className="visi-misi-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" className="text-center">
              <div className="visi-misi-content">
                <h2>Visi dan Misi</h2>
                <p>
                  Visi kami adalah menjadi pemimpin dalam industri perjalanan dengan menyediakan layanan berkualitas tinggi dengan pengalaman yang tak terlupakan. Misi kami adalah menyediakan pelayanan terbaik, memastikan kepuasan pelanggan, dan memberikan nilai tambah bagi setiap perjalanan yang kami layani.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ visi dan misi section end ============ */}

      {/* ============ syarat dan ketentuan section start ============ */}
      <section className="terms-section">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Syarat dan Ketentuan Pemesanan Paket Trip</h2>
              <div className="terms-box">
                <p>1. Pastikan Anda telah menyetujui dan memastikan untuk melakukan perjalanan bersama kami sesuai dengan paket trip destinasi wisata yang anda tuju dan tanggal yang sesuai, untuk menghindari kemungkinan perubahan tanggal atau kondisi lainnya.</p>
                <p>2. Sebagai kebijakan utama terkait pemesanan, diharapkan untuk tidak melakukan perubahan terhadap pemesanan paket trip dan tanggal perjalanan ke destinasi dikarenakan tidak dapat mengubah pesanan secara online melalui website kami.</p>
                <p>Untuk mengubah pemesanan paket trip hubungi kami melalui WhatsApp di nomor kontak Voyago: 0812-1235-6599. Permintaan perubahan harus diajukan setidaknya tujuh (7) hari sebelum tanggal perjalanan atau layanan dimulai. Biaya administrasi dapat dikenakan sesuai dengan kebijakan yang berlaku.</p>
                <p>3. Apabila terjadi pembatalan setelah berhasil melakukan pemesanan, Voyago akan memotong 5% dari jumlah yang dibayarkan untuk mengganti biaya layanan Voyago. Hubungi kami melalui WhatsApp di nomor kontak Voyago: 0812-1235-6599 jika ingin melakukan pembatalan.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ syarat dan ketentuan section end ============ */}
    </div>
  );
}

export default Tentang;
