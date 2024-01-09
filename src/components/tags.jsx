import '../style/components/tags.scss'
import PropTypes from 'prop-types';

Tags.propTypes = {
    description: PropTypes.string
  };

function Tags({description}) {
    return (    
            <span className='tag__description'>{description}</span>
    )
}

 export default Tags;