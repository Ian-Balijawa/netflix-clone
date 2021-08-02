import React, { useEffect, useState, useContext } from 'react';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer, FooterContainer } from '../containers';
import { Loading, Header, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 0 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }

    return () => {
      return null;
    };
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="netfix-logo" />
            <Header.TextLink
              active={category === 'series' ? true : false}
              onClick={() => setCategory('series')}
            >
              series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? true : false}
              onClick={() => setCategory('films')}
            >
              films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch joker now</Header.FeatureCallOut>
          <Header.Text>
            Set in 1981, it follows Arthur Fleck, a failed clown and stand-up
            comedian whose descent into insanity and nihilism inspires a violent
            counter-cultural revolution against the wealthy in a decaying Gotham
            City.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      loading={loading}
      setProfile={setProfile}
    />
  );
}
