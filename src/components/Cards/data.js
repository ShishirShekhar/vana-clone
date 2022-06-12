// Import required images.
import card1Img from '../../images/card1-img.png';
import card2Img from '../../images/card2-img.png';
import card3Img from '../../images/card3-img.png';

// Create array for the data
const data = [
  {
    heading: 'Users Reappropriate Data Using A Secure Vault',
    description: 'Users reappropriate their personal data to a data vault in their control. This makes their data portable across the digital world. For example, users can bring their data to a marketplace to rent and sell their data.',
    image: card1Img,
    button: false
  }, 
  {
    heading: 'Data Scientists Train Models With Their Dream Datasets',
    description: 'Data scientists partner with users who grant access to their data to train machine learning models. Together, they increase competition and unleash the predictive value of data that is siloed within just a few large companies today.',
    image: card2Img,
    button: true
  }, 
  {
    heading: 'Users Augment The Value Of Data',
    description: 'Users augment the value of their data by answering questions to created labeled training datasets. These labeled datasets can be used for supervised machine learning models outside of the platform where the original data was generated. Users earn more by multiplying the value of their data through labeling.',
    image: card3Img,
    button: false
  }
];

export default data;
