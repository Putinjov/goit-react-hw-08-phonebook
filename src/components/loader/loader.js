import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MutatingDots 
  height="100"
  width="100"
  color="rgb(24, 139, 192)"
  secondaryColor= 'yellow'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
    </div>
  );
};
