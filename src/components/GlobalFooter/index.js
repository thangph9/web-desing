/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React from 'react';
import styles from './index.less';

const GlobalFooter = () => (
  <div className={`${styles['footer__footerSection___1-2XO']}`} id="footer">
    <div className={`${styles['container__container___1fvX0']}`}>
      <div className={`${styles['footer__upper___3xatR']}`}>
        <div className={`${styles['row__row___2roCA']}`}>
          <div
            className={`${styles['footer__col-md-2___1vyOI']} ${
              styles['footer__socialLinks___3S5w9']
            }`}
          >
            <a
              href="#"
              className={`${styles['footer__logo___SNGnI']}`}
              style={{ marginLeft: '10px' }}
            >
              <img
                id={`${styles['footer__image___logo']}`}
                className={`${styles['footer__image___1wrDs']}`}
                src="/image/123orderwhite.png"
              />
            </a>
            <ul className={`${styles['list-inline']}`}>
              <li className={`${styles['list-inline-item']}`}>
                <a href="https://www.facebook.com/LeflairVN">
                  <i className={`${styles['ic-facebook']}`} />
                </a>
              </li>
              <li className={`${styles['list-inline-item']}`}>
                <a href="https://instagram.com/leflairvietnam">
                  <i className={`${styles['ic-instagram']}`} />
                </a>
              </li>
              <li className={`${styles['list-inline-item']}`}>
                <a href="https://www.linkedin.com/company/leflair">
                  <i className={`${styles['ic-linkedin2']}`} />
                </a>
              </li>
              <li className={`${styles['list-inline-item']}`}>
                <a href="https://zalo.me/3159399474223916820">
                  <i className={`${styles['ic-ic-zalo']}`} />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles['footer__col-md-2___1vyOI']} ${styles['footer__col-4___-XXVx']} ${
              styles['footer__contact___2p3rC']
            }`}
          >
            <h4 className={`${styles['footer__title___2Zw_F']}`}>Liên hệ</h4>
            <div className={`${styles['footer__body___2_pAR']}`}>
              <ul className={`${styles['list-unstyled']}`}>
                <li>
                  <a className={`${styles['phone']}`} href="tel:19006710">
                    19006710
                  </a>
                </li>
                <li>
                  <a className={`${styles['email']}`} href="mailto:help@123order.vn">
                    help@123order.vn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles['footer__col-md-2___1vyOI']} ${styles['footer__col-4___-XXVx']} ${
              styles['footer__company___GKAFU']
            }`}
          >
            <h4 className={`${styles['footer__title___2Zw_F']}`}>Doanh nghiệp</h4>
            <div className={`${styles['footer__body___2_pAR']}`}>
              <ul className={`${styles['list-unstyled']}`}>
                <li>
                  <a href="https://pages.leflair.vn/about-us">Về 123Order</a>
                </li>
                <li>
                  <a href="https://styleguide.leflair.vn/">Style Guide</a>
                </li>
                <li>
                  <a href="https://pages.leflair.vn/partners">Hợp tác</a>
                </li>
                <li>
                  <a href="https://pages.leflair.vn/genuine-guarantee">Chính hãng</a>
                </li>
                <li>
                  <a href="https://careers.leflair.vn/">Tuyển dụng</a>
                </li>
                <li>
                  <a href="/brands">Thương hiệu</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles['footer__col-md-2___1vyOI']} ${styles['footer__col-4___-XXVx']} ${
              styles['footer__customerService___2ZPaW']
            }`}
          >
            <h4 className={`${styles['footer__title___2Zw_F']}`}>Chăm sóc khách hàng</h4>
            <div className={`${styles['footer__body___2_pAR']}`}>
              <ul className={`${styles['list-unstyled']}`}>
                <li>
                  <a href="https://support.leflair.vn/hc/vi">Hỏi đáp</a>
                </li>
                <li>
                  <a href="https://support.leflair.vn/hc/vi/articles/214167448-Ch%C3%ADnh-s%C3%A1ch-tr%E1%BA%A3-h%C3%A0ng-v%C3%A0-ho%C3%A0n-ti%E1%BB%81n">
                    Đổi trả
                  </a>
                </li>
                <li>
                  <a href="https://support.leflair.vn/hc/vi/articles/214857097-%C4%90i%E1%BB%81u-kho%E1%BA%A3n-v%C3%A0-quy-%C4%91%E1%BB%8Bnh-chung">
                    Điều khoản &amp; quy định
                  </a>
                </li>
                <li>
                  <a href="https://support.leflair.vn/hc/vi/articles/214167378-Ch%C3%ADnh-s%C3%A1ch-giao-v%C3%A0-nh%E1%BA%ADn-h%C3%A0ng">
                    Giao hàng
                  </a>
                </li>
                <li>
                  <a href="https://support.leflair.vn/hc/vi/articles/214113678-T%C3%B4i-c%C3%B3-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3c-h%C3%B3a-%C4%91%C6%A1n-GTGT-trong-b%C6%B0u-ki%E1%BB%87n-kh%C3%B4ng-">
                    Thuế
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles['footer__col-md-4___2KXw4']} ${
              styles['footer__facebookPage___2mPne']
            }`}
          >
            <div
              className={`${styles['fb-page']}`}
              data-href="https://www.facebook.com/LeflairVN"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
              data-show-posts="false"
            />
          </div>
        </div>
      </div>
      <div className={`${styles['footer__lower___3ZvXz']}`}>
        <div className={`${styles['row__row___2roCA']}`}>
          <div
            className={`${styles['footer__col-lg-8___KYzn5']} ${
              styles['footer__col-md-8___2pauw']
            }`}
          >
            <div className={`${styles['row__row___2roCA']}`}>
              <div
                className={`${styles['footer__col-lg-6___2jvLt']} ${
                  styles['footer__copyright___1R9Fa']
                }`}
              >
                <a
                  className={`${styles['footer__govLink___1bjkn']}`}
                  href="http://www.online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=19306"
                  target="blank"
                >
                  <img
                    className={`${styles['footer__image___1wrDs']}`}
                    src=""
                  />
                </a>
                <span className={`${styles['footer__text___1Ta7d']}`}>
                  Copyright @ 2018 123Order.vn
                </span>
              </div>
              <div
                className={`${styles['footer__col-lg-6___2jvLt']} ${
                  styles['footer__address___aiHX9']
                }`}
              >
                Công ty Cổ phần 123Order - Tầng 18, Tháp A, Tòa nhà CT2E chung cư VOV, Đường Lương
                Thế Vinh, Hà Nội
              </div>
            </div>
          </div>
          <div
            className={`${styles['footer__col-lg-4___excjO']} ${
              styles['footer__col-md-4___2KXw4']
            }`}
          >
            Cơ quan cấp: Sở Kế hoạch và Đầu tư Thành phố Hà Nội
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GlobalFooter;
