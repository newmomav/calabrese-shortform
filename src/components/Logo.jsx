import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <div className="w-full h-auto z-50 opacity-0 fade-in">
        <NavLink to="/">
          <svg
            viewBox="-100 0 1000 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
          >
            <path
              d="M717.042 11.7077C711.969 13.5864 708.118 15.6531 705.488 17.9076C702.857 20.1621 700.791 22.5105 699.288 24.9529C697.785 27.3953 696.094 31.9043 694.215 38.4799C692.336 45.0556 691.397 50.1282 691.397 53.6978C691.397 57.2675 691.773 61.1189 692.524 65.2522C693.276 69.3854 694.403 73.9884 695.906 79.061C697.409 84.1336 700.227 91.2729 704.36 100.479C708.494 109.685 711.5 118.233 713.378 126.124C715.257 134.015 716.478 145.193 717.042 159.66C717.606 174.126 717.23 181.923 715.915 183.05C714.6 184.177 713.848 185.868 713.66 188.123C713.472 190.377 711.969 192.726 709.151 195.168C706.333 197.61 705.112 199.301 705.488 200.241C705.676 200.71 705.863 201.18 706.051 201.65C704.267 201.931 702.482 202.213 700.697 202.495C697.127 203.059 694.967 203.622 694.215 204.186C693.464 204.75 693.088 205.313 693.088 205.877C693.088 206.44 693.839 207.38 695.342 208.695C696.845 210.01 698.63 211.043 700.697 211.795C702.764 212.546 705.018 212.64 707.46 212.077C709.903 211.513 711.5 210.762 712.251 209.822C713.003 208.883 714.506 208.507 716.76 208.695C719.015 208.883 720.424 208.695 720.987 208.131C721.551 207.568 721.927 206.159 722.115 203.904C722.303 201.65 722.678 200.241 723.242 199.677C723.806 199.113 724.463 199.113 725.215 199.677C725.966 200.241 726.53 200.335 726.905 199.959C727.281 199.583 727.375 199.019 727.187 198.268C726.999 197.516 727.563 196.765 728.878 196.013C730.193 195.262 730.851 194.041 730.851 192.35C730.851 190.659 731.508 188.78 732.824 186.714C734.139 184.647 734.796 183.05 734.796 181.923C734.796 180.795 734.514 180.044 733.951 179.668C733.669 179.48 733.387 179.292 733.105 179.105C733.575 179.105 734.045 179.105 734.514 179.105C735.454 179.105 736.017 178.917 736.205 178.541C736.393 178.165 736.299 175.065 735.924 169.241C735.548 163.417 735.548 157.123 735.924 150.36C736.299 143.596 735.83 138.899 734.514 136.269C733.199 133.639 732.542 132.042 732.542 131.478C732.542 131.196 732.542 130.915 732.542 130.633C732.73 130.633 732.917 130.633 733.105 130.633C733.293 130.633 733.481 130.633 733.669 130.633C733.481 130.257 733.293 129.881 733.105 129.506C732.73 128.754 732.636 127.345 732.824 125.278C733.011 123.212 732.542 121.991 731.414 121.615C730.851 121.427 730.287 121.239 729.724 121.051C730.005 120.675 730.287 120.3 730.569 119.924C731.133 119.172 731.321 118.045 731.133 116.542C730.945 115.039 730.287 113.348 729.16 111.469C728.033 109.591 725.966 104.33 722.96 95.688C719.954 87.0457 717.606 81.4094 715.915 78.7792C714.224 76.1489 713.097 72.2975 712.533 67.2248C711.969 62.1522 711.875 56.3281 712.251 49.7524C712.627 43.1768 713.66 38.1042 715.351 34.5345C717.042 30.9649 718.639 28.5225 720.142 27.2074C721.645 25.8923 722.96 25.0468 724.087 24.6711C725.215 24.2953 726.53 24.6711 728.033 25.7983C729.536 26.9256 731.321 27.4892 733.387 27.4892C735.454 27.4892 737.239 26.9256 738.742 25.7983C740.245 24.6711 740.996 23.5438 740.996 22.4166C740.996 21.2893 740.151 18.753 738.46 14.8076C736.769 10.8623 734.045 8.88956 730.287 8.88956C726.53 8.88956 722.115 9.82894 717.042 11.7077ZM177.37 21.5711C175.867 22.1348 173.707 24.765 170.888 29.4619C168.07 34.1588 166.473 37.1648 166.098 38.4799C165.722 39.7951 164.501 41.5799 162.434 43.8344C160.367 46.0889 158.113 49.7524 155.671 54.8251C153.228 59.8977 148.25 66.6612 140.734 75.1156C133.219 83.57 128.804 88.8305 127.489 90.8971C126.174 92.9638 125.235 94.091 124.671 94.2789C124.108 94.4668 122.886 95.7819 121.008 98.2243C119.129 100.667 118.189 102.451 118.189 103.579C118.189 104.706 118.565 106.021 119.317 107.524C120.068 109.027 121.008 110.248 122.135 111.188C123.262 112.127 125.517 112.785 128.898 113.16C132.28 113.536 135.38 111.845 138.198 108.088C141.016 104.33 143.271 101.7 144.962 100.197C146.653 98.694 147.874 97.191 148.625 95.688C149.377 94.185 152.665 93.9031 158.489 94.8425C164.313 95.7819 168.822 96.1576 172.016 95.9698C175.21 95.7819 178.967 110.436 183.288 139.933C187.609 169.429 190.146 185.304 190.897 187.559C191.649 189.813 192.494 191.035 193.434 191.223C193.903 191.316 194.373 191.41 194.843 191.504C194.655 192.256 194.467 193.007 194.279 193.759C193.903 195.262 194.561 196.483 196.252 197.422C197.097 197.892 197.943 198.362 198.788 198.832C198.976 197.892 199.164 196.953 199.352 196.013C199.727 194.135 200.949 192.726 203.015 191.786C204.048 191.316 205.082 190.847 206.115 190.377C205.833 190.095 205.551 189.813 205.27 189.532C204.706 188.968 204.424 186.62 204.424 182.486C204.424 178.353 204.8 176.005 205.551 175.441C206.303 174.877 206.679 173.844 206.679 172.341C206.679 170.838 206.021 169.899 204.706 169.523C204.048 169.335 203.391 169.147 202.733 168.959C203.297 168.114 203.861 167.268 204.424 166.423C205.551 164.732 206.115 163.323 206.115 162.196C206.115 161.069 205.645 160.317 204.706 159.941C203.767 159.566 203.015 158.908 202.452 157.969C201.888 157.029 201.606 156.184 201.606 155.432C201.606 154.681 201.982 154.211 202.733 154.023C203.485 153.835 203.861 153.272 203.861 152.332C203.861 151.393 203.391 149.89 202.452 147.823C201.512 145.757 201.512 143.972 202.452 142.469C203.391 140.966 202.921 138.617 201.042 135.424C199.164 132.23 198.224 130.445 198.224 130.069C198.224 129.693 198.694 129.412 199.633 129.224C200.573 129.036 201.042 128.566 201.042 127.815C201.042 127.063 200.761 126.218 200.197 125.278C199.633 124.339 199.352 121.427 199.352 116.542C199.352 111.657 199.07 109.027 198.506 108.651C197.943 108.276 197.755 107.148 197.943 105.27C198.13 103.391 197.755 102.264 196.815 101.888C195.876 101.512 195.5 99.4455 195.688 95.688C195.876 91.9305 195.688 89.8638 195.124 89.4881C194.561 89.1123 194.279 88.4548 194.279 87.5154C194.279 86.576 194.749 85.3548 195.688 83.8518C196.627 82.3488 197.191 79.8125 197.379 76.2429C197.567 72.6732 197.567 69.949 197.379 68.0703C197.191 66.1915 196.533 64.9703 195.406 64.4067C194.279 63.8431 193.715 62.9037 193.715 61.5886C193.715 60.2735 193.997 59.428 194.561 59.0523C195.124 58.6765 195.218 57.925 194.843 56.7978C194.467 55.6705 194.373 53.6978 194.561 50.8797C194.749 48.0616 194.373 46.2767 193.434 45.5252C192.494 44.7737 192.4 43.4586 193.152 41.5799C193.903 39.7011 194.279 37.6345 194.279 35.38C194.279 33.1255 193.903 30.9649 193.152 28.8983C192.4 26.8317 191.555 25.3287 190.615 24.3893C189.676 23.4499 188.361 22.6045 186.67 21.853C184.979 21.1015 183.382 20.7257 181.879 20.7257C180.376 20.7257 178.873 21.0075 177.37 21.5711ZM373.23 23.5438C371.539 24.6711 370.036 26.1741 368.721 28.0528C367.406 29.9316 365.809 33.2194 363.93 37.9163C362.052 42.6132 360.173 46.5586 358.294 49.7524C356.415 52.9463 355.006 54.4493 354.067 54.2615C353.128 54.0736 352.282 54.6372 351.531 55.9523C350.779 57.2675 349.182 58.9583 346.74 61.025C344.297 63.0916 340.352 65.6279 334.904 68.6339C329.455 71.6399 326.167 73.8944 325.04 75.3974C323.913 76.9004 323.255 78.4034 323.067 79.9064C322.88 81.4094 322.974 82.7246 323.349 83.8518C323.725 84.9791 324.946 86.1063 327.013 87.2336C329.08 88.3608 331.898 88.7366 335.467 88.3608C339.037 87.9851 341.573 87.2336 343.076 86.1063C344.579 84.9791 346.082 84.4154 347.585 84.4154C349.088 84.4154 350.403 84.6973 351.531 85.2609C352.658 85.8245 356.227 86.2003 362.239 86.3881C368.252 86.576 372.291 93.3395 374.357 106.679C376.424 120.018 378.021 128.003 379.148 130.633C380.276 133.263 380.839 135.048 380.839 135.987C380.839 136.927 381.685 138.993 383.375 142.187C385.066 145.381 385.912 147.917 385.912 149.796C385.912 151.675 386.288 152.99 387.039 153.741C387.791 154.493 388.166 156.278 388.166 159.096C388.166 161.914 389.012 165.39 390.703 169.523C392.393 173.656 393.333 176.474 393.521 177.977C393.709 179.48 394.272 181.359 395.212 183.614C396.151 185.868 397.184 187.371 398.312 188.123C399.439 188.874 400.66 188.686 401.975 187.559C403.29 186.432 403.76 185.023 403.384 183.332C403.008 181.641 403.384 180.608 404.511 180.232C405.639 179.856 406.108 177.789 405.921 174.032C405.733 170.274 405.169 167.926 404.23 166.987C403.29 166.047 403.102 164.826 403.666 163.323C404.23 161.82 404.605 159.566 404.793 156.56C404.981 153.554 404.981 151.581 404.793 150.641C404.605 149.702 404.042 148.669 403.102 147.542C402.163 146.414 401.881 145.475 402.257 144.723C402.633 143.972 402.069 142.845 400.566 141.342C399.063 139.839 398.687 138.054 399.439 135.987C400.19 133.921 400.096 132.136 399.157 130.633C398.218 129.13 397.654 126.406 397.466 122.46C397.278 118.515 396.621 115.697 395.493 114.006C394.366 112.315 393.803 111.094 393.803 110.342C393.803 109.591 394.084 109.027 394.648 108.651C395.212 108.276 395.493 107.148 395.493 105.27C395.493 103.391 395.212 102.076 394.648 101.324C394.084 100.573 393.239 97.6606 392.112 92.588C390.984 87.5154 390.139 81.4094 389.575 74.2702C389.012 67.1309 388.824 61.4007 389.012 57.0796C389.2 52.7584 389.012 49.9403 388.448 48.6252C387.884 47.3101 388.072 43.7404 389.012 37.9163C389.951 32.0922 390.327 28.8043 390.139 28.0528C389.951 27.3013 389.2 26.362 387.884 25.2347C386.569 24.1075 385.254 23.262 383.939 22.6984C382.624 22.1348 380.933 21.853 378.866 21.853C376.8 21.853 374.921 22.4166 373.23 23.5438ZM255.996 26.9256C254.681 28.8043 253.46 31.8103 252.332 35.9436C251.205 40.0769 250.642 49.8464 250.642 65.2522C250.642 80.6579 250.078 90.6153 248.951 95.1243C247.823 99.6333 247.448 103.203 247.823 105.833C248.199 108.463 249.42 110.248 251.487 111.188C253.554 112.127 257.405 112.879 263.041 113.442C268.678 114.006 274.314 114.006 279.95 113.442C285.586 112.879 290.189 111.657 293.759 109.779C297.329 107.9 299.395 106.585 299.959 105.833C300.522 105.082 300.804 104.236 300.804 103.297C300.804 102.358 299.865 101.606 297.986 101.042C296.107 100.479 290.753 99.8212 281.923 99.0697C273.093 98.3182 268.396 97.7546 267.832 97.3788C267.269 97.0031 267.362 94.6546 268.114 90.3335C268.865 86.0124 268.959 82.2549 268.396 79.061C267.832 75.8671 267.832 74.0823 268.396 73.7065C268.959 73.3308 269.335 66.0976 269.523 52.0069C269.711 37.9163 269.429 29.7437 268.678 27.4892C267.926 25.2347 265.953 24.1075 262.76 24.1075C259.566 24.1075 257.311 25.0468 255.996 26.9256ZM550.491 28.3347C549.363 28.5225 547.485 29.4619 544.854 31.1528C542.224 32.8437 540.157 34.7224 538.654 36.789C537.151 38.8557 536.024 41.2041 535.273 43.8344C534.521 46.4646 533.864 48.0616 533.3 48.6252C532.736 49.1888 531.233 55.2948 528.791 66.943C526.349 78.5913 525.127 86.2003 525.127 89.7699C525.127 93.3395 525.597 95.9698 526.536 97.6606C527.476 99.3515 527.852 100.855 527.664 102.17C527.476 103.485 527.852 104.988 528.791 106.679C529.73 108.37 530.2 109.779 530.2 110.906C530.2 112.033 530.388 112.879 530.764 113.442C531.139 114.006 532.079 114.382 533.582 114.569C535.085 114.757 535.93 115.039 536.118 115.415C536.306 115.791 537.527 115.978 539.782 115.978C542.036 115.978 543.539 114.663 544.291 112.033C545.042 109.403 544.854 106.209 543.727 102.451C542.6 98.694 542.036 95.5001 542.036 92.8698C542.036 91.5547 542.036 90.2396 542.036 88.9244C542.506 89.2063 542.976 89.4881 543.445 89.7699C544.385 90.3335 545.512 93.0577 546.827 97.9425C548.142 102.827 549.645 105.645 551.336 106.397C553.027 107.148 553.872 110.436 553.872 116.26C553.872 122.084 554.812 128.003 556.69 134.015C558.569 140.027 559.509 145.193 559.509 149.514C559.509 153.835 559.79 157.687 560.354 161.069C560.918 164.45 561.763 168.208 562.89 172.341C564.018 176.474 565.427 180.232 567.118 183.614C568.808 186.995 569.56 189.344 569.372 190.659C569.184 191.974 569.654 193.853 570.781 196.295C571.908 198.738 572.942 200.147 573.881 200.522C574.82 200.898 575.384 201.744 575.572 203.059C575.76 204.374 576.605 205.783 578.108 207.286C579.611 208.789 580.738 210.292 581.49 211.795C582.241 213.298 583.369 214.049 584.872 214.049C586.375 214.049 587.502 215.083 588.254 217.149C589.005 219.216 590.508 221.283 592.763 223.349C595.017 225.416 597.365 226.543 599.808 226.731C602.25 226.919 603.847 227.576 604.599 228.704C605.35 229.831 606.665 230.77 608.544 231.522C610.423 232.273 613.617 232.273 618.126 231.522C622.635 230.77 625.077 230.207 625.453 229.831C625.829 229.455 625.641 228.798 624.889 227.858C624.138 226.919 623.762 225.886 623.762 224.758C623.762 224.195 623.762 223.631 623.762 223.067C622.635 223.161 621.507 223.255 620.38 223.349C618.126 223.537 616.904 223.255 616.717 222.504C616.529 221.752 615.308 220.437 613.053 218.558C610.799 216.68 608.826 215.552 607.135 215.177C605.444 214.801 604.317 214.331 603.753 213.768C603.19 213.204 601.405 210.104 598.399 204.468C595.393 198.832 592.199 194.229 588.817 190.659C585.435 187.089 583.744 184.929 583.744 184.177C583.744 183.426 584.12 182.956 584.872 182.768C585.623 182.58 586.093 182.205 586.281 181.641C586.469 181.077 586.281 180.608 585.717 180.232C585.154 179.856 584.496 178.729 583.744 176.85C582.993 174.971 582.617 172.153 582.617 168.396C582.617 164.638 581.49 162.666 579.235 162.478C576.981 162.29 575.854 161.163 575.854 159.096C575.854 157.029 576.323 155.902 577.263 155.714C578.202 155.526 578.766 154.681 578.954 153.178C579.142 151.675 578.672 149.232 577.545 145.851C576.417 142.469 575.102 140.12 573.599 138.805C572.848 138.148 572.096 137.49 571.345 136.833C571.814 136.551 572.284 136.269 572.754 135.987C573.693 135.424 574.163 134.672 574.163 133.733C574.163 132.793 573.505 132.23 572.19 132.042C570.875 131.854 570.217 130.163 570.217 126.969C570.217 123.775 570.499 121.991 571.063 121.615C571.627 121.239 571.908 120.769 571.908 120.206C571.908 119.642 571.439 119.078 570.499 118.515C569.56 117.951 569.372 116.448 569.936 114.006C570.499 111.563 570.687 109.309 570.499 107.242C570.311 105.176 569.654 103.391 568.527 101.888C567.399 100.385 566.836 98.4122 566.836 95.9698C566.836 93.5274 565.896 90.8971 564.018 88.079C562.139 85.2609 561.199 83.3821 561.199 82.4427C561.199 81.5034 562.421 80.0943 564.863 78.2156C567.305 76.3368 569.372 74.1762 571.063 71.7339C572.754 69.2915 573.975 67.037 574.726 64.9703C575.478 62.9037 575.854 59.2401 575.854 53.9796C575.854 48.7191 575.478 45.0556 574.726 42.9889C573.975 40.9223 572.566 38.5739 570.499 35.9436C568.433 33.3134 566.46 31.4346 564.581 30.3073C562.702 29.1801 560.166 28.5225 556.972 28.3347C553.778 28.1468 551.618 28.1468 550.491 28.3347ZM461.438 33.9709C459.935 35.286 458.244 37.3527 456.365 40.1708C454.486 42.9889 452.889 44.8677 451.574 45.8071C450.259 46.7464 449.602 50.0343 449.602 55.6705C449.602 61.3068 448.944 68.8218 447.629 78.2156C446.314 87.6093 446.126 93.0577 447.065 94.5607C448.005 96.0637 448.474 98.6 448.474 102.17C448.474 105.739 449.038 108.933 450.165 111.751C451.292 114.569 453.077 116.918 455.52 118.797C457.962 120.675 460.592 121.803 463.41 122.178C466.228 122.554 468.765 122.554 471.019 122.178C473.274 121.803 476.092 120.769 479.474 119.078C482.855 117.388 485.674 115.603 487.928 113.724C490.183 111.845 492.249 109.403 494.128 106.397C496.007 103.391 496.946 99.8212 496.946 95.688C496.946 91.5547 496.382 88.5487 495.255 86.6699C494.128 84.7912 492.719 83.1942 491.028 81.8791C489.337 80.564 488.492 79.5307 488.492 78.7792C488.492 78.0277 489.055 77.1822 490.183 76.2429C491.31 75.3035 492.437 73.8005 493.564 71.7339C494.692 69.6672 495.631 66.1915 496.382 61.3068C497.134 56.422 497.134 52.1948 496.382 48.6252C495.631 45.0556 494.598 42.3314 493.283 40.4526C491.967 38.5739 490.558 37.3527 489.055 36.789C487.552 36.2254 486.707 35.4739 486.519 34.5345C486.331 33.5952 482.48 32.9376 474.965 32.5619C467.45 32.1861 462.941 32.6558 461.438 33.9709ZM65.2086 34.8164C61.4511 35.5679 58.539 36.5072 56.4724 37.6345C54.4058 38.7617 52.3392 40.2647 50.2725 42.1435C48.2059 44.0222 45.9514 46.6525 43.509 50.0343C41.0666 53.416 38.7182 57.0796 36.4637 61.025C34.2092 64.9703 32.8001 68.1642 32.2365 70.6066C31.6729 73.049 31.0153 74.552 30.2638 75.1156C29.5123 75.6792 28.8547 78.1216 28.2911 82.4427C27.7275 86.7639 26.3184 93.1516 24.0639 101.606C21.8094 110.06 20.6822 117.669 20.6822 124.433C20.6822 131.196 21.5276 137.396 23.2185 143.033C24.9094 148.669 27.3517 153.366 30.5456 157.123C33.7395 160.881 36.4637 163.323 38.7182 164.45C40.9727 165.578 43.4151 166.423 46.0453 166.987C48.6756 167.55 53.1846 167.644 59.5724 167.268C65.9601 166.893 69.4358 166.517 69.9994 166.141C70.5631 165.765 70.9388 165.108 71.1267 164.169C71.3146 163.229 72.9115 162.478 75.9175 161.914C78.9235 161.35 80.8962 160.411 81.8356 159.096C82.775 157.781 83.3386 155.996 83.5265 153.741C83.6204 152.614 83.7143 151.487 83.8083 150.36C84.4658 150.548 85.1234 150.735 85.781 150.923C86.4385 151.111 87.0961 151.299 87.7537 151.487C87.5658 150.829 87.3779 150.172 87.19 149.514C86.8143 148.199 87.19 147.354 88.3173 146.978C89.4445 146.602 90.3839 145.945 91.1354 145.005C91.8869 144.066 92.8263 142.093 93.9535 139.087C95.0808 136.081 95.6444 133.263 95.6444 130.633C95.6444 129.318 95.6444 128.003 95.6444 126.687C95.0808 126.687 94.5172 126.687 93.9535 126.687C92.8263 126.687 88.8809 129.975 82.1174 136.551C75.3539 143.126 70.3752 147.26 67.1813 148.951C63.9874 150.641 60.9814 151.581 58.1633 151.769C55.3452 151.957 52.8088 151.769 50.5543 151.205C48.2998 150.641 46.609 149.232 45.4817 146.978C44.3545 144.723 43.509 142.093 42.9454 139.087C42.3818 136.081 42.1 131.478 42.1 125.278C42.1 119.078 42.4757 113.442 43.2272 108.37C43.9787 103.297 44.9181 98.6 46.0453 94.2789C47.1726 89.9578 48.6756 85.4488 50.5543 80.7519C52.4331 76.055 54.8755 71.3581 57.8815 66.6612C60.8875 61.9643 64.3632 57.8311 68.3086 54.2615C72.2539 50.6918 74.7903 48.8131 75.9175 48.6252C77.0448 48.4373 78.2659 48.8131 79.5811 49.7524C80.8962 50.6918 82.0235 51.913 82.9628 53.416C83.9022 54.919 84.7476 57.1735 85.4991 60.1795C86.2507 63.1855 87.4718 65.9097 89.1627 68.3521C90.8536 70.7945 92.1687 72.2975 93.1081 72.8611C94.0475 73.4247 95.2687 73.7065 96.7717 73.7065C98.2747 73.7065 99.4019 73.2369 100.153 72.2975C100.905 71.3581 101.281 68.446 101.281 63.5613C101.281 58.6765 100.341 53.9796 98.4625 49.4706C96.5838 44.9616 94.1414 41.5799 91.1354 39.3254C88.1294 37.0709 85.687 35.6618 83.8083 35.0982C81.9295 34.5345 79.2993 34.1588 75.9175 33.9709C72.5358 33.783 68.9661 34.0649 65.2086 34.8164ZM552.745 43.8344C553.497 44.398 554.248 44.9616 555 45.5252C556.503 46.6525 557.536 48.0616 558.1 49.7524C558.663 51.4433 558.945 53.5099 558.945 55.9523C558.945 58.3947 558.663 60.4613 558.1 62.1522C557.536 63.8431 556.597 65.534 555.281 67.2248C553.966 68.9157 552.839 70.043 551.9 70.6066C550.96 71.1702 549.363 71.452 547.109 71.452C545.982 71.452 544.854 71.452 543.727 71.452C543.727 70.6066 543.727 69.7612 543.727 68.9157C543.727 67.2248 544.197 65.44 545.136 63.5613C546.075 61.6825 546.357 59.8977 545.982 58.2068C545.606 56.516 545.888 55.2948 546.827 54.5433C547.766 53.7918 548.424 52.6645 548.8 51.1615C549.175 49.6585 549.927 48.0616 551.054 46.3707C551.618 45.5252 552.181 44.6798 552.745 43.8344ZM472.147 45.8071C474.025 46.3707 475.622 47.7798 476.937 50.0343C478.253 52.2888 478.91 55.013 478.91 58.2068C478.91 61.4007 478.628 63.7492 478.065 65.2522C477.501 66.7552 476.562 68.1642 475.246 69.4794C473.931 70.7945 472.24 71.452 470.174 71.452C468.107 71.452 466.604 70.8884 465.665 69.7612C464.725 68.6339 464.444 64.5007 464.819 57.3614C465.195 50.2221 466.041 46.3707 467.356 45.8071C468.671 45.2434 470.268 45.2434 472.147 45.8071ZM813.704 48.6252C810.322 49.5646 806.189 50.3161 801.304 50.8797C796.419 51.4433 791.441 52.8524 786.368 55.1069C781.295 57.3614 778.195 63.5613 777.068 73.7065C775.941 83.8518 775.189 96.2516 774.814 110.906C774.438 125.56 774.438 134.86 774.814 138.805C775.189 142.751 776.505 145.381 778.759 146.696C781.014 148.011 784.114 148.857 788.059 149.232C792.004 149.608 795.95 149.326 799.895 148.387C803.84 147.448 806.752 146.226 808.631 144.723C809.571 143.972 810.51 143.22 811.449 142.469C811.074 142.093 810.698 141.717 810.322 141.342C809.946 140.966 809.571 140.59 809.195 140.214C809.665 140.12 810.134 140.027 810.604 139.933C811.543 139.745 812.483 139.181 813.422 138.242C813.892 137.772 814.361 137.302 814.831 136.833C813.892 136.457 812.952 136.081 812.013 135.705C810.134 134.954 806.659 134.766 801.586 135.142C796.513 135.518 793.695 135.236 793.132 134.296C792.568 133.357 792.192 131.29 792.004 128.096C791.816 124.903 792.004 122.742 792.568 121.615C793.132 120.488 793.413 118.609 793.413 115.978C793.413 113.348 795.01 111.845 798.204 111.469C801.398 111.094 804.498 110.342 807.504 109.215C810.51 108.088 812.671 106.867 813.986 105.551C815.301 104.236 816.052 102.827 816.24 101.324C816.334 100.573 816.428 99.8212 816.522 99.0697C812.952 98.6 809.383 98.1303 805.813 97.6606C798.674 96.7213 794.541 95.8758 793.413 95.1243C792.286 94.3728 791.441 93.0577 790.877 91.179C790.313 89.3002 790.595 88.1729 791.722 87.7972C792.85 87.4214 793.507 83.8518 793.695 77.0883C793.883 70.3248 796.889 66.1915 802.713 64.6885C808.537 63.1855 812.389 61.4946 814.268 59.6159C816.146 57.7371 817.649 56.7978 818.777 56.7978C819.904 56.7978 820.655 56.6099 821.031 56.2341C821.407 55.8584 821.407 55.2948 821.031 54.5433C820.655 53.7918 820.655 52.6645 821.031 51.1615C821.407 49.6585 821.125 48.6252 820.186 48.0616C819.246 47.4979 817.086 47.6858 813.704 48.6252ZM175.397 59.8977C175.961 60.0856 176.431 60.6492 176.807 61.5886C177.182 62.528 177.37 65.6279 177.37 70.8884C177.37 76.1489 177.088 78.9671 176.525 79.3428C175.961 79.7186 173.519 79.8125 169.198 79.6246C164.876 79.4367 162.716 78.9671 162.716 78.2156C162.716 77.4641 164.689 74.1762 168.634 68.3521C172.579 62.528 174.834 59.7098 175.397 59.8977ZM368.439 64.9703C369.567 65.1582 370.13 66.1915 370.13 68.0703C370.13 69.949 369.285 70.9824 367.594 71.1702C365.903 71.3581 364.87 71.7339 364.494 72.2975C364.306 72.5793 364.118 72.8611 363.93 73.1429C363.555 72.6732 363.179 72.2035 362.803 71.7339C362.427 71.2642 362.052 70.7945 361.676 70.3248C362.333 69.8551 362.991 69.3854 363.649 68.9157C364.964 67.9763 365.809 67.037 366.185 66.0976C366.561 65.1582 367.312 64.7825 368.439 64.9703ZM638.416 73.7065C633.907 74.458 630.15 74.8338 627.144 74.8338C624.138 74.8338 621.226 75.1156 618.407 75.6792C615.589 76.2429 613.617 76.9004 612.489 77.6519C611.362 78.4034 611.362 81.1276 612.489 85.8245C613.617 90.5214 614.274 94.7486 614.462 98.5061C614.65 102.264 614.368 109.966 613.617 121.615C612.865 133.263 612.583 141.811 612.771 147.26C612.959 152.708 613.711 156.09 615.026 157.405C616.341 158.72 617.186 160.787 617.562 163.605C617.938 166.423 618.877 168.49 620.38 169.805C621.883 171.12 623.95 171.871 626.58 172.059C629.21 172.247 631.935 171.965 634.753 171.214C637.571 170.462 640.295 169.053 642.925 166.987C645.555 164.92 647.246 163.135 647.998 161.632C648.749 160.129 649.031 159.002 648.843 158.25C648.655 157.499 646.307 157.123 641.798 157.123C637.289 157.123 634.659 157.311 633.907 157.687C633.531 157.875 633.156 158.063 632.78 158.25C632.216 157.029 631.653 155.808 631.089 154.587C629.962 152.144 629.21 149.42 628.835 146.414C628.459 143.408 628.271 140.778 628.271 138.524C628.271 136.269 628.459 134.86 628.835 134.296C629.21 133.733 631.841 132.605 636.725 130.915C641.61 129.224 644.804 127.533 646.307 125.842C647.81 124.151 648.655 122.836 648.843 121.897C649.031 120.957 648.655 120.206 647.716 119.642C646.777 119.078 643.677 118.797 638.416 118.797C633.156 118.797 629.68 118.139 627.989 116.824C626.298 115.509 625.829 113.63 626.58 111.188C627.332 108.745 627.613 104.706 627.426 99.0697C627.238 93.4335 627.332 90.3335 627.707 89.7699C628.083 89.2063 629.304 88.7366 631.371 88.3608C633.438 87.9851 635.88 87.1396 638.698 85.8245C641.516 84.5094 643.583 83.1003 644.898 81.5973C646.213 80.0943 646.965 78.4974 647.152 76.8065C647.34 75.1156 647.058 73.9884 646.307 73.4247C645.555 72.8611 642.925 72.955 638.416 73.7065ZM469.892 85.5427C472.147 85.9184 474.213 87.2336 476.092 89.4881C477.971 91.7426 478.91 94.3728 478.91 97.3788C478.91 100.385 477.971 102.827 476.092 104.706C474.213 106.585 472.804 107.524 471.865 107.524C470.925 107.524 469.61 105.739 467.919 102.17C466.228 98.6 465.101 95.1243 464.538 91.7426C463.974 88.3608 464.162 86.3881 465.101 85.8245C466.041 85.2609 467.638 85.1669 469.892 85.5427ZM574.163 143.596C574.069 143.972 573.975 144.348 573.881 144.723C573.693 145.475 573.881 146.039 574.445 146.414C575.008 146.79 575.384 147.729 575.572 149.232C575.666 149.984 575.76 150.735 575.854 151.487C575.572 151.487 575.29 151.487 575.008 151.487C574.445 151.487 574.069 151.017 573.881 150.078C573.693 149.138 573.223 148.481 572.472 148.105C572.096 147.917 571.72 147.729 571.345 147.542C571.814 146.884 572.284 146.226 572.754 145.569C573.223 144.911 573.693 144.254 574.163 143.596ZM733.105 173.468C733.293 173.844 733.481 174.22 733.669 174.596C734.045 175.347 733.481 176.193 731.978 177.132C731.227 177.602 730.475 178.071 729.724 178.541C729.63 178.353 729.536 178.165 729.442 177.977C729.254 177.602 729.818 176.756 731.133 175.441C731.79 174.783 732.448 174.126 733.105 173.468ZM199.915 179.105C200.291 179.105 200.667 180.138 201.042 182.205C201.23 183.238 201.418 184.271 201.606 185.304C201.23 185.211 200.855 185.117 200.479 185.023C199.727 184.835 199.164 184.083 198.788 182.768C198.412 181.453 198.412 180.514 198.788 179.95C199.164 179.386 199.539 179.105 199.915 179.105Z"
              className="calabrese "
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default Logo;
