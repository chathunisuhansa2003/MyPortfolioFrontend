const Footer = () => {
  return (
    <>
      <style>{`
        /* FOOTER */
        .footer {
          padding: 30px 20px;

          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          border-top: 1px solid rgba(255,255,255,0.08);

          text-align: center;
          color: #94a3b8;

          position: relative;
          overflow: hidden;
        }

        /* GLOW EFFECT */
        .footer::before {
          content: "";
          position: absolute;

          width: 300px;
          height: 300px;

          background: #38bdf8;
          filter: blur(120px);

          opacity: 0.08;

          top: -150px;
          left: 50%;

          transform: translateX(-50%);
        }

        /* FOOTER TEXT */
        .footer-text {
          position: relative;
          z-index: 1;

          font-size: 15px;
          letter-spacing: 0.5px;
        }

        /* NAME HIGHLIGHT */
        .footer-name {
          color: #38bdf8;
          font-weight: 600;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .footer-text {
            font-size: 13px;
            line-height: 1.6;
          }
        }
      `}</style>

      <footer className="footer">

        <p className="footer-text">
          © 2026 <span className="footer-name">Su Cha</span>. 
          All rights reserved.
        </p>

      </footer>
    </>
  );
};

export default Footer;