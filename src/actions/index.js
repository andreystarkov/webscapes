import fetch from 'isomorphic-fetch'
import { WP_URL, api } from '../config'
import { pushStorage } from '../etc'

export const RECEIVE_PORTFOLIO = 'RECEIVE_POSTS';

function receivePortfolio(data){
  return {
    type: RECEIVE_PORTFOLIO,
    payload: {
      portfolio: data
    }
  }
}

export function fetchPortfolio() {

    return function (dispatch, getState) {

        return fetch(api.portfolio + '?per_page=100')
            .then(response => Promise.all([response.json()]))
            .then(data => {

              const { counter } = getState();
              var total = [];

              console.log('fetchPortfolio', data);

              if( data ){

                data[0].map( (obj,key) => {
                    total.push({
                      title: obj.title.rendered,
                      text: obj.content.rendered,
                      media: obj.better_featured_image,
                      sizes: obj.better_featured_image.media_details.sizes,
                      full: obj.better_featured_image.source_url
                    });
                    dispatch(receivePortfolio(total))
                });

              }

            });
    }
}
