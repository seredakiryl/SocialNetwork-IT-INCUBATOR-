import React from 'react';
import s from './Post.module.css';

type PostType = {
  post: string
  likesCount: number
}

const Post: React.FC<PostType> = (props) => {

  return (
    <div className={s.item}>
      <img alt='img-post' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADp6em5ubk2Njb39/dYWFjGxsb7+/t6enq9vb2UlJTh4eGHh4eLi4v09PRPT0/V1dXu7u6wsLBISEhra2vc3NwiIiKcnJyqqqpfX18qKioJCQnNzc2amppBQUFnZ2cTExN0dHQxMTFCQkIcHBw6OjopKSlAXtvhAAAFHElEQVR4nO2djVoaMRBFE+RPhSIUtLVYRau8/xtWamuLys6dZJIhX+95AMjZJZvZmUkIgRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIb6cDGObDE8gv17fe6AZ9HuAoPcgM5EVW76DO/riHPQeYTbSXGz1IfOXoWDoPT4DaNg+g27DO+/x5SPcw5H3+LJ5EAzbf5h+lQwHjS/5W0kwhPHKe5BZXMqGIXzyHmU6VxNEMIQz74Em8gnT2zG79x5sAk/QD/SV9laNLyq/HafeQ1ZxAbz6vmN+5T1snM8JfjtaeagOF4mCIUyaWP7Pkv12fPEevshqliUYQu/WW6GbUabfjq/eEh1MDfyeWRzr+8Z2biMYjjUDpwjSZMbH9+7/BAbZMKONt9I++iBNZHxM0fgyJUiTudl6i/0hNUiTmXqr/eI6d43vYv7NWy83SJM5d/a7L+z3zGTp6Hd1U14weEbjp1X8glsY92AXpMl8dhA8r+j3zOK6sp95kCZztq4pWCBIkxnUC+OGZYI0mVGl21guSJOpEcZlJ2LymD8U9tuUCtIm8KOrbBh3L1TlX+lppurvzj2xmPqbyY9ifls0SHuplqk79+C3lFJh3HSMff/4tcai7txD50CvRDT+DQ3S9gos2s69FToN7MO47+A3v6muqDv3HtGZYBzGLdEn3eXb0oq+cw9OK1vWxtGn3AePgITOvSt0Pph1ccDVsg+LKnpDxZSwCeOwZ344NPlTDPH05Di/Nn6HrlGzAzM/yVAxMTJr4xu4WnZw2icaKirJObXxU3R1Ghye86mGijzlZWpSdQNn0m42hz8l3TDeoRc4fE8SxKtlnbM9wzBG+BonhHF9uKXpsrt+kmWoSFhqa+PwiiS+ruUZxg2cs5xpkqp4tWwivnJnGmrSlng0Dq9FyE8j2zA+wdf70Jr8hgt4IZpdAB+Xb6i55EhtHA7SwB+FhaHiqou1cfgNNAzA9zMTQ82F71qcNS1NcFRvZBiv4WvfkVRVVMvwBLuVYVzjl3/+cYujolqmiefNDFV34KNVWtHSpEqtGxoqlv/3tfFbvFqmjOQtDVX3YT+joqiWacN4W0NN4fKfaFzR0rRQx/DGhqq78WfFxiOGlOZWc0PNRoDFrsXxGu87T0rC2huqKpgnazxWSMzAljCMwxJFzI5UTH3DuLavY948Jo6ljKF9u1J6/byUYVxbtpzNU29gSUPLzvKsynlBw9i36VvK3MRS0tCmdSl3B0tZw/wW8/y+x8KGuQ1MBntXihvm7AYEk3PdlDdM7zW32XxcwzCx3dxo53EVQ0UN55W51VdXMlTvDLTbc1zLMG41y79cb8GpZqip4Zg2xlU0jLfY8m/cFVfTEMvIWLfE1TWMS+ntHyqYqahsKNVwChwUU90w3nV8XYnzjOobHi6hlTkixsPwQBKn0PkwLoZx+75ZJrlzSsLH8H0Sp9zJMF6G++W0ScHzRNwM/03iFN2F6mgYly9v//qCmQpPw5ckTun9p76GcdUrfmihs2EFaNg+NGwfGrYPDduHhu1Dw/ahYfvQsH1o2D40bB8atg8N24eG7UPD9qFh+/z3hk38sUwn0pF0x3GufA5Sc3J7/9X1FumYgHHV848LsBbPy/Q+Nz8XufV60PZNXAPHdRznv+agQPuo2/rTvH3Avbrt/hHpChNs9y4qdluftPi40Zxl8PxEPW/NcX2OH3r0wng0bSdG7U9H4MHYhBBCCCGEEEIIIYQQQgghhKTzE6HAeJDAyqp4AAAAAElFTkSuQmCC' />
      {props.post}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;