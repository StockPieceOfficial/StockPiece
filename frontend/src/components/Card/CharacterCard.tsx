import React, { useCallback } from 'react';
import { Eye, EyeOff, Crosshair } from 'lucide-react';
import { CharacterCardProps } from '../../types/Stocks';
import './CharacterCard.css';

const visibilityIcons = {
  show: Eye,
  hide: EyeOff,
  only: Crosshair,
};

const CharacterCard: React.FC<CharacterCardProps> = React.memo(
  ({ stock, qty, onBuy, onSell, onVisibilityChange, ownedQuantity }) => {
    const { id, name, image, currentPrice, visibility } = stock;
    const IconComponent = visibilityIcons[visibility] || Eye;

    const cycleVisibility = useCallback(() => {
      const nextState =
        visibility === 'show' ? 'hide' : visibility === 'hide' ? 'only' : 'show';
      onVisibilityChange(id, nextState);
    }, [visibility, id, onVisibilityChange]);

    return (
      <div className="op-stock-card">
        <div className="op-image-container">
          <img src={image} alt={name} className="op-character-image" loading='lazy' />
          <button
            className="op-visibility-toggle"
            onClick={cycleVisibility}
            data-visibility={visibility}
          >
            <IconComponent size={14} />
          </button>
        </div>

        <div className="op-divider" />

        <div className="op-card-body">
        <div className="op-header">
          <h3 className="op-character-name">
            {name} <span className="op-ticker-symbol">{stock.tickerSymbol}</span>
          </h3>
          <span className="op-character-price">
            {currentPrice.toLocaleString()}฿
          </span>
        </div>
          <div className="op-meta">
            <span className="op-owned">Owned: {ownedQuantity}</span>
            <div className="op-actions">
                <button
                className="op-buy-button"
                onClick={() => onBuy(name)}
                >
                Buy{qty !== "1" ? ` ${qty}` : ''}
                </button>
                <button
                className="op-sell-button"
                onClick={() => onSell(name)}
                >
                Sell{qty !== "1" ? ` ${qty}` : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CharacterCard;
