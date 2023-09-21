const API_BASE_URL = 'https://tools.texoit.com/backend-java/api/movies';

export const fetchMovies = async (page, size, winner, year) => {
  try {
    const params = new URLSearchParams({
      page,
      size,
      winner,
      year,
    }).toString();

    const response = await fetch(`${API_BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar filmes');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
};

export const fetchYearsWithMultipleWinners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/years-with-multiple-winners`);
    if (!response.ok) {
      throw new Error('Erro ao buscar anos com múltiplos vencedores');
    }

    const data = await response.json();
    return data.years;
  } catch (error) {
    console.error('Erro ao buscar anos com múltiplos vencedores:', error);
    throw error;
  }
};

export const fetchTopStudios = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/studios-with-win-count`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os principais estúdios');
    }

    const data = await response.json();
    return data.studios;
  } catch (error) {
    console.error('Erro ao buscar os principais estúdios:', error);
    throw error;
  }
};

export const fetchProducersWithMaxMinInterval = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/max-min-win-interval-for-producers`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtores com intervalo máximo e mínimo');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtores com intervalo máximo e mínimo:', error);
    throw error;
  }
};

export const fetchWinnersByYear = async (year) => {
  try {
    const response = await fetch(`${API_BASE_URL}?winner=true&year=${year}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar vencedores de ${year}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error(`Erro ao buscar vencedores de ${year}:`, error);
    throw error;
  }
};
