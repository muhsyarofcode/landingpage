import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingPage = () => {
    return(
        <div className='load'>
        <ClimbingBoxLoader
        color="#ece255"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
    )
}
export default LoadingPage;