import "./Home.css";

function Home() {
  return (
    <div className="top_of_comp">
      <div className="subheader__top">
        <h4>home</h4>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD29vbx8fH7+/sfHx8VFRV0dHSXl5eCgoKQkJCqqqr5+flqamphYWHu7u5vb2/e3t7n5+fMzMywsLCIiIjExMTY2NhdXV27u7vS0tKfn59SUlLJyck4ODgoKCh8fHxGRkYyMjJISEiioqI/Pz8MDAwcHBwsLCw3NzdVVVWxH7iJAAAFFUlEQVR4nO2d6XoiOQxF44SBsBSELSyhE9IN2d7/ARumu2foAmqRrmzBd89/UnVCYVuyrLq5IYQQQgghhBBCCCGEEEIIIYQQAqIxmi02nXU2X20/t6t5tu5sFstRI/VtYejNuuvtP+EU78+t7vI29Q3qWN5/nXQ7ZNUZp75NIbeLh1K7P/Qng9S3W5txq7Leb8nHS/pZju5favrtaU5HqW+8IrO+QO8XP76lvvkKzMrHliJeH1MLlLDU+e3Zeh5aB3q/fx1nqUXOcQ/x29PupXY5xVIyfp7jbZFa54he9em9GnNna4BZEyy4w9XX+IT329FOrfUfjZWJYAjPTp7U4enYCMIytdyepZ3fjm5qvZubialgCJ3UgrhZ/hzTtIJtc8EQWtcuuJv80wlOowiGkKUStP8N/iHR3G89ih6SZEQdRxQMYRJfcBhVMMXq5i2yYYidiJPn06R8jyu4qX+HD51D1vX/QNQBdVb//kIu9SIISGImGiUR/d1ff6EhCbnuztwOHtFiDWC4iiUoeUYhhtFmxc9khm9x9lMF4yjKMKxjCN7JBDGGYRjBUJr6xRj+sBcUr0cxhhEmRfFyDWRovniTzRRAQ/MvUb7iRhlubQVHYkGYYbDd669bQ2JhaLp2u5UL4gxNY+GuC0PLFPGzC8N8qAlEPlVgDe0mDFUSH2hol+bXCCINzYJ9XQ4YaWhVxKDbaUIafhkZfndjGGxqUZV5fKihzcpNM92jDW22vjNHhq8mhsrKPKhhsEi6KQInA0OLMttHV4YbA0Ptrj3W0KJ4QbtjiDV8NjDUVpBiDZsGQ41SEGxoEOhrh9K84bvyz+ErF4oDi2YpecOPt7JPFP8P8BtthZPFvHFbRj7z0Cv9RHEscw83LFyV2uSGCucn/Mq048wQf8nCRyaBYR9+ucJsdwJD/EZi4cZoAsNP+OUKo8MEhvh9RG+GH/DLeTN8gV/O2+8QH1x4G0vxu4jXPx96W9M8wC93/etSbWyRj8krfKCwjvgJbqg+hJeLD7WV8Pj4EB3ja7MYBqcTnBkaFGRcf65NuTFzAflSXzlv/HTobd/C4gS0r70nk4NeH54MTYr2FXWJcEOb+sSFI0ObM6UDR4ZGVbRbP4Y2gsrD6UhDfPj7C114gTQ0O+HlxtCsb01hJiOiodVDqqxsu4gaYSd13k07QVWjCJyhZQuJ6z9vUZz+imRoewRRsXKDGRr3xpQ3D0QZWp8ilU8YKEPzNrXiLxFkaH8QWJzMABlG6FArDfUxhjYF3n/TSGoY4zy+9FQCxDBSAz5ZrI8wbEbq2y6bMRCG0XrwiNIZAEO7uPAIfYMg5z2GRM9pLkstMIzadF8QKPbbhwiWRpE7C6Lbd5dj3C3iGGQH9io0ozeiV1cu1CTB2wSuvvelflO4Dvj6oErEa9GarB+0TTv9Y9apBGN1Ek7a7jqG4jqlYIzfYuKe7PYjaqJR9BDbedHF659Ghgu4KGmZClgtw1d+Xo6obJlxBvwhSgUWb2Jx8QaWA9DvSbAor1Qy1GyB53lxMYYegfs1uvoFHtJTli/+JouYU6vNUFsNHsKrtxEmj9Jx5d1vz0BeztDysoYp464raWr+0nHymrVqzOrOj+tLeDxzjNtVZ8j31iW8Jfckg0lWFni8r56Gl/Q25xMMF535Gbuv6eTS7f5nNF5spq2HrN/vZ1lr+jT5NnT5vlhCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQsuMnyCpdb6NXJTMAAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div className="home">
        <div className="home__left">
          <div className="home__option">
            <div className="home__option__left">
              <img
                className="siz_dots"
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Header</p>
            </div>
            <img
              className="down_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJeEpIJXCso4miG5k7xuvGE-2RcfXriKHfw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="home__option">
            <div className="home__option__left">
              <img
                className="siz_dots"
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Text</p>
            </div>
            <img
              className="down_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJeEpIJXCso4miG5k7xuvGE-2RcfXriKHfw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="home__option">
            <div className="home__option__left">
              <img
                className="siz_dots"
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Links</p>
            </div>
            <img
              className="down_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJeEpIJXCso4miG5k7xuvGE-2RcfXriKHfw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="home__option">
            <div className="home__option__left">
              <img
                className="siz_dots"
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Email & SMS</p>
            </div>
            <img
              className="down_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJeEpIJXCso4miG5k7xuvGE-2RcfXriKHfw&usqp=CAU"
              alt=""
            />
          </div>

          <div className="add_block">
            <p>+ Add Block</p>
          </div>

          <div className="bottom_button">
            <div className="btn_left">Refer a friend</div>
            <div className="btn_right">Upgrade</div>
          </div>
        </div>

        <div className="home__right">
          <p>beacons.ai/saurabh_16</p>
          <div className="btn_left">Copy</div>
          <div>
            <p>
              Check out the live preview of your page below. Just click or tap
              on any block to modify it.
            </p>
          </div>
          <div className="mobile__screen">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-v5BMpwtivawnQyGYtxO1LWzQAkNa5fPeQHV4dIX4HlVDk9OGEVik2b_W6rktCDo_ns&usqp=CAU"
              alt=""
            />
            <h3>@saurabh_16</h3>
            <p>
              I'm a book lover and I love to travel the world, meet new people
              and learn about different cultures.
            </p>
            <div className="twitter">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Twitter</h3>
            </div>
            <div className="twitter">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Make your own page</h3>
            </div>
            <div className="twitter">
              <h3>Join my community</h3>
            </div>
            <div className="email">
              <h3>Stay up to date</h3>
              <p>Email</p>
              <p>Submit</p>
            </div>
            <div className="mobile_logo_bottom">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="analytics__bottom">
        <p>Privacy Policy | Terms of Service | Contact</p>
        <p>Beacons® is a registered trademark of Beacons AI, Inc.</p>
      </div>
    </div>
  );
}

export default Home;
