import React from 'react';

function Footer() {
  return (
    <div className='heroContainer'>
      <div className='title'>Noah Omar</div>

      {/* First two rows */}
      <div className='firstRow'>
        <div>
          <ul>
            <li>Noah’s Corner</li>
            <li>Little Noah’s World</li>
            <li>Noah’s Nest</li>
            <li>The Tiny Steps</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Noah Omar’s Journey</li>
            <li>With Love, Noah</li>
            <li>Noah’s Playground</li>
            <li>Family Moments</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Meet Noah</li>
            <li>Our Story</li>
            <li>Baby Journal</li>
            <li>Photo Album</li>
          </ul>
        </div>
      </div>

      <div className='firstRow'>
        <div>
          <ul>
            <li>Milestones</li>
            <li>First Words</li>
            <li>First Steps</li>
            <li>Little Achievements</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Learning Journey</li>
            <li>Toys & Games</li>
            <li>Playtime</li>
            <li>Favorite Songs</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Baby Laughs</li>
            <li>Bedtime Stories</li>
            <li>Gallery</li>
            <li>Baby Videos</li>
          </ul>
        </div>
      </div>

      {/* Final row */}
      <div className='finalRowWrapper'>
        <div className='finalRowLeft'>
          <ul>
            <li>Special Days</li>
            <li>Birthday Moments</li>
            <li>Tiny Adventures</li>
            <li>Friends</li>
          </ul>
        </div>

        <div className='finalRowRight'>
          <ul>
            <li className='msg'>Messages for Noah</li>
            <li className='msg'>Contact Us</li>
            <li className='msg'>Guestbook</li>
            <li className='msg'>Future Dreams</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
