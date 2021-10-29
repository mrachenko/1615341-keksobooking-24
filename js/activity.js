const makePageInactive = () => {
  const form = document.querySelector('.ad-form');
  const fieldsets = form.querySelectorAll('fieldset');
  const mapFilterGroup = document.querySelector('.map__filters');
  const mapFilters = mapFilterGroup.querySelectorAll('select', 'input');

  form.classList.add('ad-form--disabled');
  fieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', 'disabled'));
  mapFilterGroup.classList.add('map__filters--disabled');
  mapFilters.forEach((filter) => filter.setAttribute('disabled', 'disabled'));
};

const makePageActive = () => {
  const form = document.querySelector('.ad-form');
  const fieldsets = form.querySelectorAll('fieldset');
  const mapFilterGroup = document.querySelector('.map__filters');
  const mapFilters = mapFilterGroup.querySelectorAll('select', 'input');

  form.classList.remove('ad-form--disabled');
  fieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
  mapFilterGroup.classList.remove('map__filters--disabled');
  mapFilters.forEach((filter) => filter.removeAttribute('disabled'));
};

export {makePageInactive, makePageActive};
