const Cooperation: React.FC<React.SVGProps<SVGSVGElement>> = ({width = "33", height = "33", ...props}) => (
    <svg width={width} height={height} {...props} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.50242 3.87836C6.46907 2.91171 7.78013 2.36865 9.14718 2.36865C10.5142 2.36865 11.8253 2.91171 12.7919 3.87836C13.7586 4.84501 14.3017 6.15608 14.3017 7.52313C14.3017 8.89018 13.7586 10.2012 12.7919 11.1679C12.6157 11.3441 12.4281 11.5062 12.2307 11.6536C13.3799 12.212 14.3545 13.0725 15.0514 14.1305C15.6045 13.9321 16.1927 13.8278 16.7916 13.8278C17.3893 13.8278 17.9762 13.9316 18.5284 14.1292C19.2252 13.0718 20.1995 12.2118 21.3482 11.6536C21.1502 11.5057 20.9626 11.3435 20.787 11.1679C20.3084 10.6893 19.9287 10.121 19.6696 9.49566C19.4106 8.87029 19.2773 8.20002 19.2773 7.52313C19.2773 6.15608 19.8203 4.84502 20.787 3.87836C21.7536 2.91171 23.0647 2.36865 24.4318 2.36865C25.7988 2.36865 27.1099 2.91171 28.0765 3.87836C29.0432 4.84502 29.5862 6.15608 29.5862 7.52313C29.5862 8.20002 29.4529 8.87029 29.1939 9.49566C28.9348 10.121 28.5552 10.6893 28.0765 11.1679C27.901 11.3434 27.7134 11.5056 27.5154 11.6534C29.8723 12.7986 31.4968 15.2156 31.4968 18.0119V19.9225C31.4968 20.6589 30.8999 21.2559 30.1635 21.2559C29.4271 21.2559 28.8302 20.6589 28.8302 19.9225V18.0119C28.8302 15.5827 26.861 13.6134 24.4318 13.6134C22.8747 13.6134 21.5048 14.422 20.7219 15.6475C21.5093 16.5754 21.9461 17.7563 21.9461 18.9823C21.9461 20.3494 21.403 21.6604 20.4364 22.6271C20.2602 22.8032 20.0726 22.9653 19.8754 23.1126C22.2324 24.2576 23.8572 26.6746 23.8572 29.4711C23.8572 30.2075 23.2603 30.8045 22.5239 30.8045C21.7875 30.8045 21.1906 30.2075 21.1906 29.4711C21.1906 27.0419 19.2213 25.0728 16.792 25.0728C14.3628 25.0728 12.3936 27.0419 12.3936 29.4711C12.3936 30.2075 11.7966 30.8045 11.0602 30.8045C10.3238 30.8045 9.72689 30.2075 9.72689 29.4711C9.72689 26.6748 11.3514 24.258 13.7082 23.1129C13.5108 22.9655 13.3231 22.8033 13.1468 22.6271C12.1802 21.6604 11.6371 20.3494 11.6371 18.9823C11.6371 17.7576 12.073 16.5778 12.8588 15.6503C12.0762 14.4233 10.7055 13.6134 9.1472 13.6134C6.71798 13.6134 4.7487 15.5827 4.7487 18.0119V19.9225C4.7487 20.6589 4.15174 21.2559 3.41536 21.2559C2.67898 21.2559 2.08203 20.6589 2.08203 19.9225V18.0119C2.08203 15.2155 3.70663 12.7986 6.06349 11.6535C5.86619 11.5062 5.67858 11.3441 5.50242 11.1679C4.53577 10.2012 3.99271 8.89018 3.99271 7.52313C3.99271 6.15608 4.53577 4.84502 5.50242 3.87836ZM9.14718 5.03532C8.48738 5.03532 7.85459 5.29743 7.38804 5.76398C6.92148 6.23054 6.65937 6.86332 6.65937 7.52313C6.65937 8.18294 6.92148 8.81572 7.38804 9.28228C7.85459 9.74883 8.48738 10.0109 9.14718 10.0109C9.80699 10.0109 10.4398 9.74883 10.9063 9.28228C11.3729 8.81572 11.635 8.18294 11.635 7.52313C11.635 6.86332 11.3729 6.23054 10.9063 5.76398C10.4398 5.29743 9.80699 5.03532 9.14718 5.03532ZM24.4318 5.03532C23.7719 5.03532 23.1392 5.29743 22.6726 5.76398C22.2061 6.23054 21.9439 6.86332 21.9439 7.52313C21.9439 7.84983 22.0083 8.17334 22.1333 8.47517C22.2583 8.77701 22.4416 9.05126 22.6726 9.28228C22.9036 9.51329 23.1779 9.69654 23.4797 9.82157C23.7815 9.94659 24.1051 10.0109 24.4318 10.0109C24.7585 10.0109 25.082 9.94659 25.3838 9.82157C25.6856 9.69654 25.9599 9.51329 26.1909 9.28228C26.4219 9.05126 26.6052 8.77701 26.7302 8.47517C26.8552 8.17334 26.9196 7.84984 26.9196 7.52313C26.9196 6.86332 26.6575 6.23054 26.1909 5.76398C25.7243 5.29743 25.0916 5.03532 24.4318 5.03532ZM16.7916 16.4945C16.1318 16.4945 15.499 16.7566 15.0324 17.2232C14.5659 17.6897 14.3038 18.3225 14.3038 18.9823C14.3038 19.6421 14.5659 20.2749 15.0324 20.7415C15.499 21.208 16.1318 21.4701 16.7916 21.4701C17.4514 21.4701 18.0842 21.208 18.5507 20.7415C19.0173 20.2749 19.2794 19.6421 19.2794 18.9823C19.2794 18.3225 19.0173 17.6897 18.5507 17.2232C18.0842 16.7566 17.4514 16.4945 16.7916 16.4945Z" fill="black"/>
    </svg>
)

export default Cooperation;