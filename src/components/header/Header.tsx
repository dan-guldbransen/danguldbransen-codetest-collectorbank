import './styles.css';

const Header = () => {
  return (
    <div className='container'>
      <h1 className='headline'>Lånekalkyl</h1>
      <div className='cost-container'>
        <div className='cost-box'>
          <p className='cost-text'>Exempel på månadskostnad</p>
          <p className='cost-calculated'>10 000 SEK / mån</p>
          <div className='cost-arrow' />
        </div>
      </div>
    </div>
  );
};
export default Header;
