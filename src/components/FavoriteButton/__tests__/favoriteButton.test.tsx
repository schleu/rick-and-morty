import { render, fireEvent } from '@testing-library/react';
import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext';
import { FavoriteButton } from '../index';

describe('FavoriteButton', () => {
  it('should call handleFavoriteCharacter when clicked', () => {
    const characterId = 123;
    const handleFavoriteCharacter = jest.fn();
    const isFavorite = false;

    const { getByRole } = render(
      <FavoriteCharacterContext.Provider value={{ handleFavoriteCharacter: handleFavoriteCharacter, favorites:[] }}>
        <FavoriteButton characterId={characterId} isFavorite={isFavorite} />
      </FavoriteCharacterContext.Provider>
    );

    const button = getByRole('button');
    fireEvent.click(button);

    expect(handleFavoriteCharacter).toHaveBeenCalledWith(characterId);
  });
});