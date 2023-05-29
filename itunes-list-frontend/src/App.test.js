import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import mockAxios from "jest-mock-axios";
import { fetchData,BASE_URL } from './utils';


// test 1 App renders correctly and matches snapshot
function MockApp(){
  return (<>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>)
}

test("renders correctly",() => {
  const app = render(<MockApp/>);
  expect(app).toMatchSnapshot();
});

// Test 2 Unit test to check API return using mockAxios

describe("fetch API item", () => {
  afterEach(()=>{
    mockAxios.reset();
  });


  describe("when API call is successful", () => {
    it("should return the song object", async() => {
      // given
      const expected = [{
        "wrapperType": "track",
        "kind": "song",
        "artistId": 116851,
        "collectionId": 1440839912,
        "trackId": 1440840510,
        "artistName": "blink-182",
        "collectionName": "Enema of the State",
        "trackName": "All the Small Things",
        "collectionCensoredName": "Enema of the State",
        "trackCensoredName": "All the Small Things",
        "artistViewUrl": "https://music.apple.com/us/artist/blink-182/116851?uo=4",
        "collectionViewUrl": "https://music.apple.com/us/album/all-the-small-things/1440839912?i=1440840510&uo=4",
        "trackViewUrl": "https://music.apple.com/us/album/all-the-small-things/1440839912?i=1440840510&uo=4",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/48/18/c0/4818c0c9-4a95-eb7b-8632-1db6dd9b22dc/mzaf_3609150729841940164.plus.aac.p.m4a",
        "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/f2/78/c2f2783f-8e65-0b2b-80ac-b52c4cfece2d/16UMGIM35657.rgb.jpg/30x30bb.jpg",
        "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/f2/78/c2f2783f-8e65-0b2b-80ac-b52c4cfece2d/16UMGIM35657.rgb.jpg/60x60bb.jpg",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/f2/78/c2f2783f-8e65-0b2b-80ac-b52c4cfece2d/16UMGIM35657.rgb.jpg/100x100bb.jpg",
        "collectionPrice": 8.99,
        "trackPrice": 1.29,
        "releaseDate": "1999-01-01T12:00:00Z",
        "collectionExplicitness": "explicit",
        "trackExplicitness": "notExplicit",
        "discCount": 1,
        "discNumber": 1,
        "trackCount": 12,
        "trackNumber": 8,
        "trackTimeMillis": 167029,
        "country": "USA",
        "currency": "USD",
        "primaryGenreName": "Rock",
        "isStreamable": true
    }];
      mockAxios.get.mockResolvedValueOnce(expected);

      // result is the returned object from the utils.js function fetchData()
      const result = await fetchData();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}`);
      expect(result).toEqual(expected);
    });
  });

  describe("when API call fails", () => {
    it("should return empty array", async () => {
      // given
      const message = "Network Error";
      mockAxios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchData();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}`);
      expect(result).toEqual([]);
    });
  });
});
