import React, { Component } from 'react'
import MicrolinkCard from '@microlink/react'
import '../App.css'

class All extends Component {

  render() {
    return (
      <div className='wrap'>
        <MicrolinkCard
          url='https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'
          size='large'
        /> 
        <MicrolinkCard
          url='https://www.businessinsider.com/ipad-mini-price'
          size='large'
        /> 

        <MicrolinkCard 
         url='https://www.businessinsider.com/new-york-may-legalize-e-scooters-lime-new-model-2019-1'
         size='large' 
        />

        <MicrolinkCard
          url='https://www.nytimes.com/2019/04/15/world/europe/notre-dame-fire-what-we-know.html?action=click&module=Top%20Stories&pgtype=Homepage'
          size='large'
        /> 
        <MicrolinkCard
          url='https://www.csoonline.com/article/3387952/outside-the-box-malware-is-getting-more-common-security-researchers-warn.html'
          size='large'
        /> 

        <MicrolinkCard 
         url='https://www.npr.org/2019/04/16/713876618/dog-saved-by-workers-on-oil-rig-135-miles-off-thai-coast'
         size='large' 
        />  

        <MicrolinkCard
          url='https://www.cnbc.com/2019/04/16/netflix-earnings-q1-2019.html'
          size='large'
        /> 
        <MicrolinkCard
          url='https://www.androidpolice.com/2019/04/16/samsung-galaxy-fold-appears-to-be-first-device-to-use-ultra-fast-eufs-3-0-storage/'
          size='large'
        /> 

        <MicrolinkCard 
         url='https://www.cbsnews.com/news/a-wisconsin-mans-bet-that-tiger-woods-would-claim-masters-title-won-him-more-than-1-2-million/'
         size='large' 
        />

      </div>
    )
  }
}

export default All;