export default function deprecated(...args) {
    return function decorator(target, key, descriptor) {
      let msg = 'This method is deprecated and will be removed in a future version.';

      if (typeof descriptor.value !== 'function') {
          throw new SyntaxError('Methods can only be marked as deprecated.');
      }

      if (args[0]) {
          msg += `\n\n ${args[0]}`;
      }

      let contextual = `${target.constructor.name}#${key}`;

      return {
        ...descriptor,
        value: function methodWrapper() {
            console.warn(`DEPRECATED ${contextual}: ${msg}`);
            return descriptor.value.apply(this, arguments);
        }
      }
    }
}
