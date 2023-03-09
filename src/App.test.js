import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import store from './redux/store';
import MyProfile from './components/MyProfile';
import App from './App';
import { fetchMissions, joinMission } from './redux/missions/MissionsSlice';

it('App renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('NavBar page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Missons page renders correctly', async () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('MyProfile page renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// mission slicer and reducer check

describe('Mission redux state tests', () => {
  it('Should initially set Missions store to an empty Array', () => {
    const state = store.getState().missions;
    expect(state.missionstore).toEqual([]);
  });

  it('should Join Mission payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'missions/joinMission' };
    const actualPayload = joinMission('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('Mission fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v3/missions';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();

    await fetchMissions(url)(dispatchSpy);

    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});

it('Rockets page renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Rocket slicer and reducer check
describe('Rocket redux state tests', () => {
  it('Should initially hold Rocket data by default', () => {
    const state = store.getState().rockets;
    expect(state.rocketstore.length).toEqual(4);
  });
  it('should Reserve Rocket payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'rockets/reserveRocket' };
    const actualPayload = reserveRocket('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });
  it('Rockets fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchRockets(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});