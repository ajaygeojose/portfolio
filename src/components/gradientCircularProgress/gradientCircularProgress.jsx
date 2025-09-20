import { CircularProgress } from '@mui/material';

const GradientCircularProgress = () => {
    function GradientCircularProgress() {
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <svg width={0} height={0}>
              <defs>
                <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#323b4c" />
                   <stop offset="100%" stopColor="#bcbab4ff"/>
                </linearGradient>
              </defs>
            </svg>
            <CircularProgress
              sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
            />
          </div>
        );
      }
  return (
    <div><GradientCircularProgress/></div>
  )
}

export default GradientCircularProgress