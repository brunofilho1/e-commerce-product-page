import styled from "styled-components";
import { HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck, HiOutlineShoppingCart } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { RiShareForward2Fill } from 'react-icons/ri';

export const Container = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
`;

export const ProductKind = styled.div`
    font-size: 14px;
    color: var(--color-gray);
    margin-bottom: 16px;

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    > h1 {
        width: 75%;
        font-size: 26px;
        font-weight: 600;
    }

    > div {
        display: flex;
        gap: 10px;
        flex-direction: column;
        padding: 0;
    }
`;

export const HeartIcon = styled(HiOutlineHeart)`
    width: 28px;
    height: 28px;
    color: var(--color-blue);

    margin-left: 16px;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        padding: 1px;
    }
`;
export const ShareIcon = styled(RiShareForward2Fill)`
    width: 28px;
    height: 28px;
    color: var(--color-blue);

    margin-left: 16px;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        padding: 1px;
    }
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
    width: 28px;
    height: 28px;
    color: var(--color-blue);

    margin-left: 16px;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        padding: 1px;
    }
`;

export const Condition = styled.div`
    margin-top: 12px;
    background: var(--color-blue);
    color: var(--color-white);
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    width: fit-content;
`;

export const PriceCard = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
`;

export const PriceRow = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 44px;
    font-weight: 300;

    .fraction {
        margin-left: 8.8px;
    }

    .cents {
        font-size: 20px;
        padding-top: 6px;
        margin-left: 1px;
    }
`;

export const InstallmentsInfo = styled.div`
    font-size: 16px;
`;

export const StockStatus = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    > div {
        display: flex;
        align-items: center;
        color: var(--color-green);

        span {
            margin-left: 8px;
        }
    }

    > p {
        margin-top: 5px;
        color: var(--color-gray);
        font-size: 14px;
        margin-left: 34px;
    }
`;

export const DeliveryIcon = styled.div`
    display: flex;

    img {
        width: 40px;
    }
`;

export const Delivery = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    margin-left: -8px;
    
    > div {
        margin-left: 8px;
        display: flex;
        flex-direction: column;

        .title {
            color: var(--color-green);
            font-size: 16px;
        }
        .details {
            margin-top: 5px;
            color: var(--color-gray);
            font-size: 14px;
        }
        .more {
            margin-top: 5px;
            text-decoration: none;
            color: var(--color-blue);
            font-size: 14px;
            font-weight: 600;
        }
    }
`;

export const PaymentIcon = styled(MdPayment)`
    width: 24px;
    height: 24px;
    color: var(--color-green);
`;

export const MethodCard = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;

    #payment-title {
        display: flex;
        align-items: center;

        > span {
            margin-left: 8px;
            color: var(--color-green);
        }
    }

    .details {
            margin-top: 5px;
            color: var(--color-gray);
            font-size: 14px;
        }

    .more {
        margin-top: 5px;
        text-decoration: none;
        color: var(--color-blue);
        font-size: 14px;
        font-weight: 600;
    }

    #payment-icons-div {
        display: flex;
        align-items: center;
    }
    .payment-icon {
        width: 50px;

        & + .payment-icon {
            margin-left: 5px;
        }
    }
`;

export const CheckIcon = styled(HiOutlineCheck)`
    width: 24px;
    height: 24px;
    color: var(--color-green);

`;



export const Actions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;

`;

type ButtonProps = {solid?: boolean}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;
    border-radius: 4px;
    padding: 12px 10px;
    margin-top: 10px;

    color: ${props => props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
    background: ${props => props.solid ? 'var(--color-blue)' : 'var(--color-transparent)'};
    border: ${props => props.solid ? '1px solid transparent' : '1px solid var(--color-blue)'};

    cursor: pointer;

    &:hover {
        color: ${props => props.solid ? 'var(--color-blue)' : 'var(--color-white)'};
        background: ${props => props.solid ? 'var(--color-transparent)' : 'var(--color-blue)'};
        border: ${props => props.solid ? '1px solid var(--color-blue)' : '1px solid var(--color-blue)'};
    }

`;

export const Benefits = styled.ul`
    margin-top: 16px;
    list-style: none;

    display: flex;
    flex-direction: column;

    > li {
        display: flex;
        align-items: center;

        p {
            margin-left: 10px;
            color: var(--color-gray);
            font-size: 14px;
        }
    }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
    width: 20px;
    height: 20px;
    color: var(--color-green);

    flex-shrink: 0;

`;