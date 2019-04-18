import React, { Component } from 'react';
import axios from 'axios';
import MicrolinkCard from '@microlink/react';
import '../App.css';

class All extends Component {

    // state = {
    //     links: []
    // }

    componentDidMount = () => {
        console.log("COMPONENT MOUNTED")
        axios.get(`https://rticle.herokuapp.com/api/user/:${localStorage.getItem('user_id')}`).then(res => {
            this.setState({ links: res.data  })
        })
    }

  render() {

    return (

        <div className='wrap'>
        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.cbsnews.com/news/a-wisconsin-mans-bet-that-tiger-woods-would-claim-masters-title-won-him-more-than-1-2-million/'
                  size='large' />
            <div class="extra content">
            <div class="ui primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                 url='https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'
                 size='large' />
            <div class="extra content">
            <div class="ui primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.businessinsider.com/ipad-mini-price'
                  size='large' />
            <div class="extra content">
            <div class="ui primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.businessinsider.com/new-york-may-legalize-e-scooters-lime-new-model-2019-1'
                  size='large' />
            <div class="extra content">
            <div class="ui primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.nytimes.com/2019/04/15/world/europe/notre-dame-fire-what-we-know.html?action=click&module=Top%20Stories&pgtype=Homepage'
                  size='large' />
            <div class="extra content">
            <div class="ui primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.csoonline.com/article/3387952/outside-the-box-malware-is-getting-more-common-security-researchers-warn.html'
                  size='large' />
            <div class="extra content">
            <div class="ui  primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.npr.org/2019/04/16/713876618/dog-saved-by-workers-on-oil-rig-135-miles-off-thai-coast'
                  size='large' />
            <div class="extra content">
            <div class="ui  primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.cnbc.com/2019/04/16/netflix-earnings-q1-2019.html'
                  size='large' />
            <div class="extra content">
            <div class="ui  primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>

        <div class="ui card">
                 <MicrolinkCard 
                  url='https://www.androidpolice.com/2019/04/16/samsung-galaxy-fold-appears-to-be-first-device-to-use-ultra-fast-eufs-3-0-storage/'
                  size='large' />
            <div class="extra content">
            <div class="ui  primary button">Share</div>
            <div class="ui button">Delete</div>
            </div>
        </div>
      </div>

    )
  }
}

export default All;